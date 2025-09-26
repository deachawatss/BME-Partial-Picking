// PK Backend - Rust Axum Server with Authentication
use axum::{
    http::StatusCode,
    response::Json,
    routing::{get, post},
    Router,
};
use serde_json::{json, Value};
use anyhow::Context;
use std::env;
use tracing::info;

mod auth_handlers;
mod jwt_service;
mod ldap_service;
mod sql_auth_service;

use auth_handlers::{
    health_handler, login_handler, refresh_token_handler, test_connections_handler,
    validate_token_handler,
};
use jwt_service::JwtService;
use ldap_service::LdapService;
use sql_auth_service::SqlAuthService;

// Application state
#[derive(Clone)]
pub struct AppState {
    pub ldap_service: LdapService,
    pub sql_auth_service: SqlAuthService,
    pub jwt_service: JwtService,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Load environment variables
    dotenv::dotenv().ok();

    // Initialize tracing
    tracing_subscriber::fmt::init();

    // Initialize services
    let ldap_service = LdapService::new()?;
    let sql_auth_service = SqlAuthService::new()?;
    let jwt_service = JwtService::new()?;

    // Create shared application state
    let app_state = AppState {
        ldap_service,
        sql_auth_service,
        jwt_service,
    };

    // Build our application with routes - NO CORS complexity
    let app = Router::new()
        .route("/", get(root))
        .route("/api/health", get(health_handler))
        .route("/api/auth/login", post(login_handler))
        .route("/api/auth/refresh", post(refresh_token_handler))
        .route("/api/auth/validate", post(validate_token_handler))
        .route("/api/test/connections", get(test_connections_handler))
        // Keep mock endpoints for now
        .route("/api/runs", get(mock_runs))
        .route("/api/weight/current", get(mock_weight))
        .route("/api/weight/fetch", post(mock_fetch_weight))
        .with_state(app_state);

    // Get server configuration from environment - NO hardcoding
    let server_host = env::var("SERVER_HOST")
        .context("SERVER_HOST must be set")?;
    let server_port = env::var("BACKEND_PORT")
        .context("BACKEND_PORT must be set")?;
    let bind_address = format!("{server_host}:{server_port}");

    let listener = tokio::net::TcpListener::bind(&bind_address).await?;

    info!("🦀 PK Backend server listening on http://{}", bind_address);
    info!(
        "📊 Health check: http://{}:{}/api/health",
        server_host, server_port
    );
    info!(
        "🔐 Authentication: POST http://{}:{}/api/auth/login",
        server_host, server_port
    );
    info!(
        "🔧 Connection test: GET http://{}:{}/api/test/connections",
        server_host, server_port
    );
    info!(
        "🎫 Token validation: POST http://{}:{}/api/auth/validate",
        server_host, server_port
    );

    axum::serve(listener, app).await?;

    Ok(())
}


// Basic route handlers
async fn root() -> &'static str {
    "PK Backend Server - Rust + Axum"
}

async fn mock_runs() -> Result<Json<Value>, StatusCode> {
    // Mock partial picking runs
    Ok(Json(json!([
        {
            "id": "1",
            "runNo": "600015",
            "description": "Production run for PRD10A03",
            "status": "NEW",
            "itemCount": 8,
            "createdDate": "2025-09-25T08:00:00Z"
        }
    ])))
}

async fn mock_weight() -> Result<Json<Value>, StatusCode> {
    // Mock current weight reading
    Ok(Json(json!({
        "weight": 19.985,
        "unit": "KG",
        "stable": true,
        "timestamp": "2025-09-25T12:00:00Z"
    })))
}

async fn mock_fetch_weight() -> Result<Json<Value>, StatusCode> {
    // Mock fetch weight from scale
    Ok(Json(json!({
        "success": true,
        "weight": 20.001,
        "unit": "KG",
        "stable": true,
        "timestamp": "2025-09-25T12:00:00Z"
    })))
}
