// PK Backend - Rust Axum Server
// Placeholder implementation for development

use axum::{
    http::StatusCode,
    response::Json,
    routing::{get, post},
    Router,
};
use serde_json::{json, Value};
use tower_http::cors::CorsLayer;

#[tokio::main]
async fn main() {
    // Initialize tracing
    tracing_subscriber::fmt::init();

    // Build our application with routes
    let app = Router::new()
        .route("/", get(root))
        .route("/api/health", get(health_check))
        .route("/api/auth/login", post(mock_login))
        .route("/api/runs", get(mock_runs))
        .route("/api/weight/current", get(mock_weight))
        .route("/api/weight/fetch", post(mock_fetch_weight))
        .layer(CorsLayer::permissive());

    let listener = tokio::net::TcpListener::bind("0.0.0.0:7070").await.unwrap();

    tracing::info!("🦀 PK Backend server listening on http://0.0.0.0:7070");
    tracing::info!("📊 Health check: http://localhost:7070/api/health");
    tracing::info!("🔐 Mock login: POST http://localhost:7070/api/auth/login");

    axum::serve(listener, app).await.unwrap();
}

// Basic route handlers
async fn root() -> &'static str {
    "PK Backend Server - Rust + Axum"
}

async fn health_check() -> StatusCode {
    StatusCode::OK
}

async fn mock_login() -> Result<Json<Value>, StatusCode> {
    // Mock successful login response
    Ok(Json(json!({
        "success": true,
        "message": "Login successful",
        "token": "mock_jwt_token_123456789",
        "user": {
            "id": "user_001",
            "username": "testuser",
            "displayName": "Test User",
            "workstationId": "WS-001",
            "roles": ["picker", "operator"]
        }
    })))
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