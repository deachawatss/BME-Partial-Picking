# Environment Configuration Guide

This document explains how to configure the PK Partial Picking System using environment variables from the root `.env` file.

## Overview

All hardcoded IP addresses, ports, and configuration values have been centralized in the root `.env` file. The system automatically reads these values and configures all services accordingly.

## Configuration Files

### Primary Configuration
- **Root `.env`**: Master configuration file containing all system settings
- **Location**: `/PK/.env`
- **Purpose**: Single source of truth for all configuration values

### Auto-Generated Files
The following files are automatically generated and should NOT be edited manually:

- `apps/frontend/src/environments/environment.ts` - Angular development environment
- `apps/frontend/src/environments/environment.prod.ts` - Angular production environment
- `apps/frontend/src/index.html` - CSP headers updated dynamically

## Key Configuration Sections

### Network & Service Ports
```env
# Service Ports
FRONTEND_PORT=6060
BACKEND_PORT=7070
BRIDGE_SERVICE_PORT=5000

# Server Bind Addresses
SERVER_HOST=0.0.0.0

# Frontend ↔ Backend routing
BACKEND_PROTOCOL=http
BACKEND_HOST=127.0.0.1
API_BASE_URL=/api
BRIDGE_PROTOCOL=http
BRIDGE_HOST=127.0.0.1
```

- `API_BASE_URL=/api` keeps Angular requests relative to the dev server so the built-in proxy forwards them to the Rust API. Set this to a full URL (`https://api.example.com/v1`) for production builds.
- `BACKEND_HOST`/`BRIDGE_HOST` default to `127.0.0.1`, which works both on Linux and from a Windows browser hitting the WSL instance.

### Database Configuration
```env
# Primary Database (TFCPILOT3)
DATABASE_SERVER=192.168.0.86
DATABASE_PORT=49381
DATABASE_NAME=TFCPILOT3
DATABASE_USERNAME=NSW
DATABASE_PASSWORD=B3sp0k3

# Scale Database Configuration
SCALE_DB_SERVER=192.168.0.86
SCALE_DB_PORT=49381
SCALE_DB_NAME=TFCPILOT3
```

### Authentication & Security
```env
# LDAP Configuration
LDAP_URL=ldap://192.168.0.1
LDAP_BASE_DN=DC=NWFTH,DC=com

# JWT Configuration
JWT_SECRET=your_secure_jwt_secret_here
JWT_DURATION_HOURS=168
```

### Hardware Configuration
```env
# Weight Scale Configuration
DEFAULT_SCALE_BAUD_RATE=9600
WEIGHT_POLLING_INTERVAL_MS=400
WEBSOCKET_MAX_RESPONSE_TIME=100
ENABLE_MULTI_SCALE=true
```

## How It Works

### Frontend (Angular)
1. **Environment Generation**: `scripts/env-config.js` reads `.env` and generates Angular environment files
2. **CSP Update**: `scripts/update-csp.js` updates Content Security Policy with dynamic URLs
3. **Build Integration**: All scripts run automatically during `npm start` and `npm run build`

### Backend Services
- **Rust Backend**: Reads environment variables directly using `std::env::var()`
- **C# Bridge Service**: Uses `Environment.GetEnvironmentVariable()` for configuration
- **Auto-Discovery**: All services automatically discover their configuration from `.env`

## Usage Examples

### Development Setup
```bash
# Start all services with current .env configuration
npm run dev:all

# Update configuration only
cd apps/frontend
npm run config:all
```

### Environment-Specific Configuration
```bash
# Generate development environment
npm run env:config

# Generate production environment
npm run env:config:prod

# Update CSP headers
npm run csp:update
```

### Testing Different Configurations
```bash
# Example: Change backend port
# 1. Edit .env file
BACKEND_PORT=8080

# 2. Restart services - configuration automatically updates
npm run dev:all
```

## Service-Specific Configuration

### Frontend Angular
- **Auto-configured from**: `API_BASE_URL`, `BACKEND_PROTOCOL`, `BACKEND_HOST`, `BACKEND_PORT`, `FRONTEND_PORT`
- **Dev proxy**: `proxy.conf.js` forwards `/api` requests to the Rust backend using the host/port above (no browser cross-origin hassle)
- **Generated files**: `environment.ts`, `environment.prod.ts`

### Rust Backend
- **Auto-configured from**: `SERVER_HOST`, `BACKEND_PORT`, `DATABASE_*`, `LDAP_*`
- **Configuration method**: Environment variables with fallback defaults
- **Dynamic binding**: Server binds to `$SERVER_HOST:$BACKEND_PORT`

### C# Bridge Service
- **Auto-configured from**: `SERVER_HOST`, `BRIDGE_SERVICE_PORT`
- **Configuration method**: `Environment.GetEnvironmentVariable()`
- **Dynamic URLs**: All console output shows configured ports

## Configuration Scripts

### Environment Configuration (`scripts/env-config.js`)
- **Purpose**: Generate Angular environment files from `.env`
- **Input**: Root `.env` file
- **Output**: `environment.ts` and `environment.prod.ts`
- **Features**: Type conversion, fallback values, production optimizations

### CSP Update (`scripts/update-csp.js`)
- **Purpose**: Update Content Security Policy with dynamic URLs
- **Input**: Root `.env` file
- **Output**: Updated `index.html` with CSP
- **Features**: Supports both localhost and 127.0.0.1, WebSocket URLs

### Image Optimization (`scripts/optimize-images.js`)
- **Purpose**: Optimize images for web performance
- **Requirements**: `npm install sharp --save-dev`
- **Output**: Optimized images in multiple formats and sizes

## Best Practices

### 1. Environment Management
- **Never commit `.env`**: Always in `.gitignore`
- **Use `.env.example`**: Template for new environments
- **Validate configuration**: Check logs for loaded values

### 2. Development Workflow
```bash
# 1. Update .env file with your settings
nano .env

# 2. Restart development services
npm run dev:all

# 3. Configuration automatically applies to all services
```

### 3. Production Deployment
```bash
# 1. Create production .env file
cp .env.example .env

# 2. Update production values
# 3. Build with production configuration
npm run build:prod

# 4. Deploy with environment file
```

### 4. Troubleshooting
- **Check logs**: All services log their configured values on startup
- **Validate .env**: Ensure no syntax errors or missing quotes
- **Port conflicts**: Use unique ports for each service
- **Network access**: Ensure firewall allows configured ports

## Migration from Hardcoded Values

### Before (Hardcoded)
```typescript
// environment.ts
apiUrl: 'http://localhost:7070/api'
```

### After (Dynamic)
```typescript
// Auto-generated from .env
apiUrl: "http://localhost:7070/api"  // From API_BASE_URL
```

### Configuration Mapping
| Service | Before | After | Environment Variable |
|---------|--------|-------|---------------------|
| Frontend | `localhost:6060` | Dynamic | `FRONTEND_PORT` |
| Backend | `0.0.0.0:7070` | Dynamic | `BACKEND_PORT` |
| Database | `192.168.0.86` | Dynamic | `DATABASE_SERVER` |
| LDAP | `192.168.0.1` | Dynamic | `LDAP_URL` |

## Security Considerations

- **Sensitive Values**: Database passwords, JWT secrets in `.env`
- **CSP Security**: Automatically includes only necessary domains
- **Production**: Use different `.env` for production with secure values
- **Access Control**: Restrict `.env` file permissions (600)

## Advanced Configuration

### Custom Environment Variables
Add any new configuration to `.env`:
```env
# Custom application settings
CUSTOM_FEATURE_ENABLED=true
CUSTOM_TIMEOUT_MS=5000
```

Access in services:
```rust
// Rust
let timeout = env::var("CUSTOM_TIMEOUT_MS").unwrap_or_else(|_| "5000".to_string());
```

```csharp
// C#
var timeout = Environment.GetEnvironmentVariable("CUSTOM_TIMEOUT_MS") ?? "5000";
```

### Multiple Environments
```bash
# Development
cp .env.development .env

# Production
cp .env.production .env

# Testing
cp .env.testing .env
```

This system provides complete flexibility while maintaining security and ease of configuration management.
