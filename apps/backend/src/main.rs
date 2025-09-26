// PK Backend - Rust Axum Server with Authentication
use axum::{
    http::StatusCode,
    response::Json,
    routing::{get, post},
    Router,
};
use serde_json::{json, Value};
use tower_http::cors::CorsLayer;
use tracing::info;

mod ldap_service;
mod sql_auth_service;
mod jwt_service;
mod auth_handlers;

use ldap_service::LdapService;
use sql_auth_service::SqlAuthService;
use jwt_service::JwtService;
use auth_handlers::{login_handler, health_handler, test_connections_handler, validate_token_handler};

// Application state
#[derive(Clone)]
pub struct AppState {
    pub ldap_service: LdapService,
    pub sql_auth_service: SqlAuthService,
    pub jwt_service: JwtService,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
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

    // Build our application with routes
    let app = Router::new()
        .route("/", get(root))
        .route("/api/health", get(health_handler))
        .route("/api/auth/login", post(login_handler))
        .route("/api/auth/validate", post(validate_token_handler))
        .route("/api/test/connections", get(test_connections_handler))
        // Keep mock endpoints for now
        .route("/api/runs", get(mock_runs))
        .route("/api/weight/current", get(mock_weight))
        .route("/api/weight/fetch", post(mock_fetch_weight))
        .layer(CorsLayer::permissive())
        .with_state(app_state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:7070").await?;

    info!("🦀 PK Backend server listening on http://0.0.0.0:7070");
    info!("📊 Health check: http://localhost:7070/api/health");
    info!("🔐 Authentication: POST http://localhost:7070/api/auth/login");
    info!("🔧 Connection test: GET http://localhost:7070/api/test/connections");
    info!("🎫 Token validation: POST http://localhost:7070/api/auth/validate");

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