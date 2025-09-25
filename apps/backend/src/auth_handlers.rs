use axum::{
    extract::State,
    http::StatusCode,
    response::Json,
};
use serde::{Deserialize, Serialize};
use tracing::{info, warn, error};

use crate::{
    ldap_service::LdapService,
    sql_auth_service::SqlAuthService,
    jwt_service::{JwtService, LoginResponse},
    AppState,
};

#[derive(Debug, Deserialize)]
pub struct LoginRequest {
    pub username: String,
    pub password: String,
    pub workstation_id: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct HealthResponse {
    pub status: String,
    pub message: String,
}

/// Handle login requests with dual authentication (LDAP + SQL)
pub async fn login_handler(
    State(state): State<AppState>,
    Json(payload): Json<LoginRequest>
) -> Result<Json<LoginResponse>, StatusCode> {
    info!("🔐 Login attempt for user: {}", payload.username);

    // Validate input
    if payload.username.trim().is_empty() || payload.password.is_empty() {
        warn!("Login failed: Missing username or password");
        return Ok(Json(JwtService::create_error_response(
            "Username and password are required"
        )));
    }

    let username = payload.username.trim();

    // Step 1: Check if user exists in database and get their auth preferences
    match state.sql_auth_service.get_user(username).await {
        Ok(Some(user)) if user.ad_enabled && user.auth_source == "LDAP" => {
            // User prefers LDAP authentication
            info!("User {} configured for LDAP authentication", username);

            match try_ldap_authentication(&state, username, &payload.password).await {
                Ok(response) => return Ok(Json(response)),
                Err(ldap_error) => {
                    warn!("LDAP authentication failed for {}: {}", username, ldap_error);
                    // LDAP failed, don't fallback for LDAP users
                    return Ok(Json(JwtService::create_error_response(
                        "LDAP authentication failed. Please check your domain credentials."
                    )));
                }
            }
        },
        Ok(Some(user)) if user.auth_source == "LOCAL" => {
            // User configured for local SQL authentication
            info!("User {} configured for local authentication", username);

            match try_sql_authentication(&state, username, &payload.password, payload.workstation_id).await {
                Ok(response) => return Ok(Json(response)),
                Err(sql_error) => {
                    warn!("SQL authentication failed for {}: {}", username, sql_error);
                    return Ok(Json(JwtService::create_error_response(
                        "Invalid username or password"
                    )));
                }
            }
        },
        Ok(Some(_user)) => {
            // User exists but has unclear auth configuration
            warn!("User {} has unclear authentication configuration", username);
            return Ok(Json(JwtService::create_error_response(
                "User authentication configuration error. Please contact administrator."
            )));
        },
        Ok(None) => {
            // User doesn't exist in database - try LDAP first (auto-creation)
            info!("User {} not found in database, attempting LDAP authentication", username);

            match try_ldap_authentication(&state, username, &payload.password).await {
                Ok(response) => return Ok(Json(response)),
                Err(ldap_error) => {
                    warn!("LDAP authentication failed for new user {}: {}", username, ldap_error);
                    return Ok(Json(JwtService::create_error_response(
                        "Invalid username or password"
                    )));
                }
            }
        },
        Err(db_error) => {
            error!("Database error during login for {}: {}", username, db_error);
            return Err(StatusCode::INTERNAL_SERVER_ERROR);
        }
    }
}

/// Try LDAP authentication and auto-create user if successful
async fn try_ldap_authentication(
    state: &AppState,
    username: &str,
    password: &str
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
    workstation_id: Option<String>
) -> Result<LoginResponse, anyhow::Error> {
    // Authenticate with SQL Server
    let sql_user = state.sql_auth_service.authenticate_local(username, password).await?;

    info!("✅ SQL local authentication successful for: {}", username);

    // Generate JWT token
    let response = state.jwt_service.create_login_response(&sql_user, workstation_id)?;

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
    State(state): State<AppState>
) -> Result<Json<serde_json::Value>, StatusCode> {
    let mut results = serde_json::Map::new();

    // Test SQL connection
    match state.sql_auth_service.test_connection().await {
        Ok(_) => {
            results.insert("sql".to_string(), serde_json::json!({
                "status": "connected",
                "message": "SQL Server connection successful"
            }));
        },
        Err(e) => {
            results.insert("sql".to_string(), serde_json::json!({
                "status": "error",
                "message": format!("SQL Server connection failed: {}", e)
            }));
        }
    }

    // Test LDAP connection
    match state.ldap_service.test_connection().await {
        Ok(_) => {
            results.insert("ldap".to_string(), serde_json::json!({
                "status": "connected",
                "message": "LDAP connection successful"
            }));
        },
        Err(e) => {
            results.insert("ldap".to_string(), serde_json::json!({
                "status": "error",
                "message": format!("LDAP connection failed: {}", e)
            }));
        }
    }

    Ok(Json(serde_json::Value::Object(results)))
}

/// Validate JWT token endpoint
pub async fn validate_token_handler(
    State(state): State<AppState>,
    headers: axum::http::HeaderMap,
) -> Result<Json<serde_json::Value>, StatusCode> {
    // Extract Authorization header
    let auth_header = headers.get("authorization")
        .and_then(|h| h.to_str().ok());

    // Extract token from header
    let token = match JwtService::extract_token_from_header(auth_header) {
        Some(token) => token,
        None => {
            return Ok(Json(serde_json::json!({
                "valid": false,
                "message": "No Authorization header provided"
            })));
        }
    };

    // Verify token
    match state.jwt_service.verify_token(token) {
        Ok(claims) => {
            Ok(Json(serde_json::json!({
                "valid": true,
                "username": claims.username,
                "display_name": claims.display_name,
                "auth_source": claims.auth_source,
                "expires_at": claims.exp
            })))
        },
        Err(e) => {
            Ok(Json(serde_json::json!({
                "valid": false,
                "message": format!("Invalid token: {}", e)
            })))
        }
    }
}