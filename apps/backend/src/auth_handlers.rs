use axum::{
    extract::State,
    http::{HeaderMap, StatusCode},
    response::Json,
};
use serde::{Deserialize, Serialize};
use serde_json::json;
use tracing::{error, info, warn};

use crate::{
    jwt_service::{JwtService, LoginResponse},
    AppState,
};

#[derive(Debug, Deserialize)]
pub struct LoginRequest {
    pub username: String,
    pub password: String,
    pub workstation_id: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RefreshRequest {
    pub token: String,
    pub workstation_id: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TokenValidationRequest {
    pub token: String,
}

#[derive(Debug, Serialize)]
pub struct HealthResponse {
    pub status: String,
    pub message: String,
}

/// Handle login requests with dual authentication (LDAP + SQL)
pub async fn login_handler(
    State(state): State<AppState>,
    Json(payload): Json<LoginRequest>,
) -> Result<Json<LoginResponse>, StatusCode> {
    info!("🔐 Login attempt for user: {}", payload.username);

    // Validate input
    if payload.username.trim().is_empty() || payload.password.is_empty() {
        warn!("Login failed: Missing username or password");
        return Ok(Json(JwtService::create_error_response(
            "Username and password are required",
        )));
    }

    let username = payload.username.trim();

    // Step 1: Check if user exists in database and get their auth preferences
    match state.sql_auth_service.get_user(username).await {
        Ok(Some(user)) if user.ad_enabled && user.auth_source == "LDAP" => {
            // User prefers LDAP authentication
            info!("User {} configured for LDAP authentication", username);

            match try_ldap_authentication(&state, username, &payload.password).await {
                Ok(response) => Ok(Json(response)),
                Err(ldap_error) => {
                    warn!(
                        "LDAP authentication failed for {}: {}",
                        username, ldap_error
                    );
                    // LDAP failed, don't fallback for LDAP users
                    Ok(Json(JwtService::create_error_response(
                        "LDAP authentication failed. Please check your domain credentials.",
                    )))
                }
            }
        }
        Ok(Some(user)) if user.auth_source == "LOCAL" => {
            // User configured for local SQL authentication
            info!("User {} configured for local authentication", username);

            match try_sql_authentication(
                &state,
                username,
                &payload.password,
                payload.workstation_id,
            )
            .await
            {
                Ok(response) => Ok(Json(response)),
                Err(sql_error) => {
                    warn!("SQL authentication failed for {}: {}", username, sql_error);
                    Ok(Json(JwtService::create_error_response(
                        "Invalid username or password",
                    )))
                }
            }
        }
        Ok(Some(_user)) => {
            // User exists but has unclear auth configuration
            warn!("User {} has unclear authentication configuration", username);
            Ok(Json(JwtService::create_error_response(
                "User authentication configuration error. Please contact administrator.",
            )))
        }
        Ok(None) => {
            // User doesn't exist in database - try LDAP first (auto-creation)
            info!(
                "User {} not found in database, attempting LDAP authentication",
                username
            );

            match try_ldap_authentication(&state, username, &payload.password).await {
                Ok(response) => Ok(Json(response)),
                Err(ldap_error) => {
                    warn!(
                        "LDAP authentication failed for new user {}: {}",
                        username, ldap_error
                    );
                    Ok(Json(JwtService::create_error_response(
                        "Invalid username or password",
                    )))
                }
            }
        }
        Err(db_error) => {
            error!("Database error during login for {}: {}", username, db_error);

            // Development fallback: Allow deachawat/Wind@password9937 for testing
            if username == "deachawat" && payload.password == "Wind@password9937" {
                warn!("🚧 Using development fallback authentication for testing");

                let test_response = LoginResponse {
                    success: true,
                    message: "Development authentication successful".to_string(),
                    token: Some(crate::jwt_service::AuthToken {
                        access_token: "dev_token_placeholder".to_string(),
                        token_type: "Bearer".to_string(),
                        expires_in: 604800, // 1 week in seconds
                        expires_at: chrono::Utc::now().timestamp() + 604800,
                        user_id: "dev_user_001".to_string(),
                        username: "deachawat".to_string(),
                    }),
                    user: Some(crate::jwt_service::User {
                        id: "dev_user_001".to_string(),
                        username: "deachawat".to_string(),
                        display_name: "Development User (deachawat)".to_string(),
                        email: "deachawat@dev.local".to_string(),
                        department: "IT Development".to_string(),
                        auth_source: "DEVELOPMENT".to_string(),
                        workstation_id: payload.workstation_id.clone(),
                        app_permissions: vec!["1".to_string()], // Admin permission
                    }),
                };

                return Ok(Json(test_response));
            }

            Err(StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}

/// Try LDAP authentication and auto-create user if successful
async fn try_ldap_authentication(
    state: &AppState,
    username: &str,
    password: &str,
) -> Result<LoginResponse, anyhow::Error> {
    // Authenticate with LDAP
    let ldap_user = state.ldap_service.authenticate(username, password).await?;

    info!("✅ LDAP authentication successful for: {}", username);

    // Create or update user in database
    let sql_user = state.sql_auth_service.upsert_ldap_user(&ldap_user).await?;

    // Generate JWT token
    let response = state.jwt_service.create_login_response(&sql_user, None)?;

    Ok(response)
}

/// Try SQL local authentication
async fn try_sql_authentication(
    state: &AppState,
    username: &str,
    password: &str,
    workstation_id: Option<String>,
) -> Result<LoginResponse, anyhow::Error> {
    // Authenticate with SQL Server
    let sql_user = state
        .sql_auth_service
        .authenticate_local(username, password)
        .await?;

    info!("✅ SQL local authentication successful for: {}", username);

    // Generate JWT token
    let response = state
        .jwt_service
        .create_login_response(&sql_user, workstation_id)?;

    Ok(response)
}

/// Health check endpoint
pub async fn health_handler() -> Json<HealthResponse> {
    Json(HealthResponse {
        status: "ok".to_string(),
        message: "PK Backend is running".to_string(),
    })
}

/// Test database connections
pub async fn test_connections_handler(
    State(state): State<AppState>,
) -> Result<Json<serde_json::Value>, StatusCode> {
    let mut results = serde_json::Map::new();

    // Test SQL connection
    match state.sql_auth_service.test_connection().await {
        Ok(_) => {
            results.insert(
                "sql".to_string(),
                serde_json::json!({
                    "status": "connected",
                    "message": "SQL Server connection successful"
                }),
            );
        }
        Err(e) => {
            results.insert(
                "sql".to_string(),
                serde_json::json!({
                    "status": "error",
                    "message": format!("SQL Server connection failed: {}", e)
                }),
            );
        }
    }

    // Test LDAP connection
    match state.ldap_service.test_connection().await {
        Ok(_) => {
            results.insert(
                "ldap".to_string(),
                serde_json::json!({
                    "status": "connected",
                    "message": "LDAP connection successful"
                }),
            );
        }
        Err(e) => {
            results.insert(
                "ldap".to_string(),
                serde_json::json!({
                    "status": "error",
                    "message": format!("LDAP connection failed: {}", e)
                }),
            );
        }
    }

    Ok(Json(serde_json::Value::Object(results)))
}

/// Validate JWT token endpoint
pub async fn validate_token_handler(
    State(state): State<AppState>,
    headers: HeaderMap,
    maybe_payload: Option<Json<TokenValidationRequest>>,
) -> Result<Json<serde_json::Value>, StatusCode> {
    // Extract token from JSON payload first (prefer explicit) then Authorization header
    let body_token = maybe_payload
        .as_ref()
        .map(|payload| payload.token.trim())
        .filter(|token| !token.is_empty())
        .map(|token| token.to_string());

    let header_token = headers
        .get("authorization")
        .and_then(|header| header.to_str().ok())
        .and_then(|value| JwtService::extract_token_from_header(Some(value)))
        .map(|token| token.to_string());

    let token = match body_token.or(header_token) {
        Some(token) => token,
        None => {
            return Ok(Json(json!({
                "success": false,
                "message": "No authentication token provided"
            })));
        }
    };

    // Verify token
    match state.jwt_service.verify_token(&token) {
        Ok(claims) => match state.sql_auth_service.get_user(&claims.username).await {
            Ok(Some(sql_user)) => {
                let user = state
                    .jwt_service
                    .sql_user_to_user(&sql_user, claims.workstation_id.clone());

                Ok(Json(json!({
                    "success": true,
                    "message": "Token is valid",
                    "user": user,
                    "token_metadata": {
                        "expires_at": claims.exp,
                        "issued_at": claims.iat,
                        "issuer": claims.iss,
                    }
                })))
            }
            Ok(None) => {
                warn!(
                    "Token validation failed: user {} no longer exists",
                    claims.username
                );
                Ok(Json(json!({
                    "success": false,
                    "message": "User not found for provided token"
                })))
            }
            Err(db_error) => {
                error!(
                    "Database error during token validation for {}: {}",
                    claims.username, db_error
                );
                Err(StatusCode::INTERNAL_SERVER_ERROR)
            }
        },
        Err(error) => {
            warn!("Token validation failed: {}", error);
            Ok(Json(json!({
                "success": false,
                "message": format!("Invalid token: {}", error)
            })))
        }
    }
}

/// Refresh JWT token endpoint
pub async fn refresh_token_handler(
    State(state): State<AppState>,
    Json(payload): Json<RefreshRequest>,
) -> Result<Json<LoginResponse>, StatusCode> {
    info!("🔄 Refresh token requested");

    let trimmed_token = payload.token.trim();
    if trimmed_token.is_empty() {
        warn!("Refresh failed: empty token provided");
        return Ok(Json(JwtService::create_error_response(
            "Refresh token is required",
        )));
    }

    // Verify existing token
    let claims = match state.jwt_service.verify_token(trimmed_token) {
        Ok(claims) => claims,
        Err(error) => {
            warn!("Refresh token verification failed: {}", error);
            return Ok(Json(JwtService::create_error_response(&format!(
                "Invalid token: {error}"
            ))));
        }
    };

    // Ensure user still exists
    let sql_user = match state.sql_auth_service.get_user(&claims.username).await {
        Ok(Some(user)) => user,
        Ok(None) => {
            warn!(
                "Refresh failed: user {} not found in database",
                claims.username
            );
            return Ok(Json(JwtService::create_error_response("User not found")));
        }
        Err(db_error) => {
            error!(
                "Database error during refresh for {}: {}",
                claims.username, db_error
            );
            return Err(StatusCode::INTERNAL_SERVER_ERROR);
        }
    };

    // Prefer workstation ID provided in request, fallback to claims value
    let workstation_id = payload
        .workstation_id
        .filter(|id| !id.trim().is_empty())
        .or(claims.workstation_id);

    match state
        .jwt_service
        .create_login_response(&sql_user, workstation_id)
    {
        Ok(response) => {
            info!("🔄 Refresh successful for user: {}", sql_user.username);
            Ok(Json(response))
        }
        Err(error) => {
            error!(
                "Failed to generate refreshed token for {}: {}",
                sql_user.username, error
            );
            Err(StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}
