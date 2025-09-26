use anyhow::{Context, Result};
use chrono::{Duration, Utc};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};
use std::env;
use tracing::info;

use crate::sql_auth_service::SqlUser;

/// JWT Claims structure
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Claims {
    pub sub: String,         // Subject (user ID)
    pub username: String,    // Username
    pub email: String,       // Email
    pub display_name: String, // Display name
    pub department: String,  // Department
    pub auth_source: String, // LDAP or LOCAL
    pub app_permissions: String, // Application permissions
    pub workstation_id: Option<String>, // Workstation ID
    pub exp: i64,           // Expiration time
    pub iat: i64,           // Issued at
    pub iss: String,        // Issuer
}

/// Authentication Token Response
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AuthToken {
    pub access_token: String,
    pub token_type: String,
    pub expires_in: i64,
    pub expires_at: i64,
    pub user_id: String,
    pub username: String,
}

/// User information for frontend
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub id: String,
    pub username: String,
    pub display_name: String,
    pub email: String,
    pub department: String,
    pub auth_source: String,
    pub workstation_id: Option<String>,
    pub app_permissions: Vec<String>,
}

/// Login Response
#[derive(Debug, Serialize, Deserialize)]
pub struct LoginResponse {
    pub success: bool,
    pub message: String,
    pub token: Option<AuthToken>,
    pub user: Option<User>,
}

#[derive(Clone)]
pub struct JwtService {
    encoding_key: EncodingKey,
    decoding_key: DecodingKey,
    issuer: String,
    token_duration: Duration,
}

impl JwtService {
    /// Initialize JWT service with 1 week token duration
    pub fn new() -> Result<Self> {
        let secret = env::var("JWT_SECRET")
            .context("JWT_SECRET must be set")?;


        let encoding_key = EncodingKey::from_secret(secret.as_bytes());
        let decoding_key = DecodingKey::from_secret(secret.as_bytes());

        let issuer = env::var("JWT_ISSUER")
            .context("JWT_ISSUER must be set")?;

        // 1 week token duration (168 hours)
        let token_duration_hours = env::var("JWT_DURATION_HOURS")
            .context("JWT_DURATION_HOURS must be set")?
            .parse::<i64>()
            .context("JWT_DURATION_HOURS must be a valid number")?;

        let token_duration = Duration::hours(token_duration_hours);

        info!("🔐 JWT Service initialized with {}h (1 week) token duration", token_duration_hours);

        Ok(Self {
            encoding_key,
            decoding_key,
            issuer,
            token_duration,
        })
    }

    /// Generate JWT token for authenticated user
    pub fn generate_token(&self, user: &SqlUser, workstation_id: Option<String>) -> Result<AuthToken> {
        let now = Utc::now();
        let exp = now + self.token_duration;

        // Create display name from first and last name
        let display_name = match (&user.first_name, &user.last_name) {
            (Some(first), Some(last)) if !last.is_empty() => format!("{} {}", first, last),
            (Some(first), _) => first.clone(),
            _ => user.username.clone(),
        };

        let claims = Claims {
            sub: user.userid.to_string(),
            username: user.username.clone(),
            email: user.email.clone().unwrap_or_else(|| format!("{}@nwfth.com", user.username)),
            display_name,
            department: user.department.clone().unwrap_or_else(|| "Unknown".to_string()),
            auth_source: user.auth_source.clone(),
            app_permissions: user.app_permissions.clone().unwrap_or_else(|| "1".to_string()),
            workstation_id,
            exp: exp.timestamp(),
            iat: now.timestamp(),
            iss: self.issuer.clone(),
        };

        let token_string = encode(&Header::default(), &claims, &self.encoding_key)
            .context("Failed to sign JWT token")?;

        info!("🎫 Generated JWT token for user: {} (expires in 1 week)", user.username);

        Ok(AuthToken {
            access_token: token_string,
            token_type: "Bearer".to_string(),
            expires_in: self.token_duration.num_seconds(),
            expires_at: exp.timestamp(),
            user_id: user.userid.to_string(),
            username: user.username.clone(),
        })
    }

    /// Verify and decode JWT token
    pub fn verify_token(&self, token: &str) -> Result<Claims> {
        let token_data = decode::<Claims>(
            token,
            &self.decoding_key,
            &Validation::default()
        ).context("Invalid JWT token signature")?;

        let now = Utc::now().timestamp();
        if now > token_data.claims.exp {
            return Err(anyhow::anyhow!("Token expired"));
        }

        // Verify issuer
        if token_data.claims.iss != self.issuer {
            return Err(anyhow::anyhow!("Invalid token issuer"));
        }

        Ok(token_data.claims)
    }

    /// Extract token from Authorization header
    pub fn extract_token_from_header(auth_header: Option<&str>) -> Option<&str> {
        auth_header?
            .strip_prefix("Bearer ")
    }

    /// Convert SqlUser to frontend User format
    pub fn sql_user_to_user(&self, sql_user: &SqlUser, workstation_id: Option<String>) -> User {
        // Create display name from first and last name
        let display_name = match (&sql_user.first_name, &sql_user.last_name) {
            (Some(first), Some(last)) if !last.is_empty() => format!("{} {}", first, last),
            (Some(first), _) => first.clone(),
            _ => sql_user.username.clone(),
        };

        // Parse app permissions (comma-separated string to vector)
        let app_permissions = sql_user.app_permissions
            .as_ref()
            .map(|perms| {
                perms.split(',')
                    .map(|s| s.trim().to_string())
                    .filter(|s| !s.is_empty())
                    .collect()
            })
            .unwrap_or_else(|| vec!["1".to_string()]);

        User {
            id: sql_user.userid.to_string(),
            username: sql_user.username.clone(),
            display_name,
            email: sql_user.email.clone().unwrap_or_else(|| format!("{}@nwfth.com", sql_user.username)),
            department: sql_user.department.clone().unwrap_or_else(|| "Unknown".to_string()),
            auth_source: sql_user.auth_source.clone(),
            workstation_id,
            app_permissions,
        }
    }

    /// Create successful login response
    pub fn create_login_response(&self, sql_user: &SqlUser, workstation_id: Option<String>) -> Result<LoginResponse> {
        let token = self.generate_token(sql_user, workstation_id.clone())?;
        let user = self.sql_user_to_user(sql_user, workstation_id);

        Ok(LoginResponse {
            success: true,
            message: "Authentication successful".to_string(),
            token: Some(token),
            user: Some(user),
        })
    }

    /// Create failed login response
    pub fn create_error_response(message: &str) -> LoginResponse {
        LoginResponse {
            success: false,
            message: message.to_string(),
            token: None,
            user: None,
        }
    }
}