# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**PK (Partial Picking System)** - A modern Angular 20.3.2 + Rust + C# fullstack application for warehouse partial picking operations with real-time weight scale integration. This system modernizes the legacy PartialPickingInKG.exe into a web-based solution that integrates with USB weight scales for precise ingredient picking workflows.

### Technology Stack (Current Implementation)
- **Frontend**: ✅ Angular 20.3.2 + TypeScript 5.9.2 + Modern CSS Architecture
- **Styling**: ✅ Custom CSS with NWFTH theme + CSS custom properties + component system
- **State Management**: ✅ Angular 20 Signals for reactive data flow
- **Template Syntax**: ✅ Modern control flow (`@if`, `@for`, `@switch`)
- **Components**: ✅ 3 fully functional standalone components
- **Backend**: 🚧 Rust + Axum framework + Tiberius SQL Server driver (planned)
- **Bridge Service**: 🚧 C# + .NET for ScaleLibrary.dll hardware integration (planned)
- **Database**: Microsoft SQL Server (TFCPILOT3 primary, TFCLIVE fallback)
- **Hardware**: USB weight scales via ScaleLibrary.dll COM port communication
- **Theme**: ✅ NWFTH brown/amber brand theme with responsive design

### Current Status
- ✅ **Angular 20 Frontend**: Fully functional with picking workflows
- ✅ **Modern CSS Architecture**: NWFTH brown theme with performance-optimized styling
- ✅ **Build System**: Clean production builds with Angular CLI 20.3.3
- 🚧 **Backend Services**: Rust and C# services in development phase

## Commands

### 🚀 Development Commands

⚠️ **IMPORTANT: Always Use `npm run dev:all` for Development**

The `dev:all` script **automatically handles process cleanup** and prevents port conflicts:

```bash
# 🚀 PRIMARY COMMAND - Use this for ALL development work
npm run dev:all         # Automatically cleans processes, then starts all services

# 🔧 Process Management (handled automatically by dev:all)
npm run dev:clean       # Kill all development processes and free ports
npm run dev:stop        # Same as dev:clean (alias)

# ⚠️  Individual services (use ONLY after manual dev:clean)
npm run dev:frontend    # Angular dev server on :6060
npm run dev:backend     # Rust server on :7070
npm run dev:bridge      # C# bridge service on :5000

# Build commands
npm run build:all       # Build all services
npm run build:frontend  # ng build --configuration production
npm run build:backend   # cargo build --release
npm run build:bridge    # dotnet build

# Testing commands
npm run test:all        # All test suites
npm run test:frontend   # Jest + Angular testing library
npm run test:backend    # Rust built-in tests
npm run test:e2e        # Playwright E2E tests
```

### 🔧 **How `npm run dev:all` Prevents Port Conflicts**

**The Problem**: Running `cargo run` or `ng serve` directly can cause:
- 🚫 Multiple processes competing for the same ports (7070, 6060, 5000)
- 🚫 "Address already in use" errors
- 🚫 Orphaned background processes
- 🚫 Frontend connection failures (`ERR_CONNECTION_RESET`)

**The Solution**: `npm run dev:all` implements this workflow automatically:

1. **🧹 Auto-Cleanup**: Runs `npm run dev:clean` to kill existing processes:
   - Terminates `ng serve`, `webpack`, `cargo run`, `dotnet run`
   - Force-kills ports 6060, 7070, 5000-5005 using `fuser -k`
   - Verifies cleanup success with process counting

2. **⚡ Service Orchestration**: Starts all 3 services in parallel:
   - Professional process management with signal handling
   - Tears down remaining services on any failure
   - Prevents orphaned processes

3. **🎯 Clean Shutdown**: Handles Ctrl+C gracefully to terminate all processes

**Why This Matters**:
- ✅ **Zero Port Conflicts**: Automatic cleanup prevents "Address already in use"
- ✅ **Reliable Startup**: All services start fresh without interference
- ✅ **Professional Workflow**: Signal handling and graceful shutdown

### Individual Service Commands
```bash
# Frontend (Angular 20)
cd frontend
npm start               # Development server
npm run build:prod      # Production build
npm test               # Unit tests
npm run lint           # ESLint + fix warnings

# Backend (Rust)
cd backend
cargo run              # Development server
cargo build --release # Production build
cargo test            # Unit tests
cargo clippy          # Linting - REQUIRED before commits
cargo fmt             # Code formatting

# Bridge Service (C#)
cd bridge-service
dotnet run            # Development server
dotnet build          # Development build
dotnet publish -c Release  # Production build
dotnet format         # Code formatting
```

### Quality Check Commands (MANDATORY)
```bash
# Run before every commit/push - ALL must pass clean
npm run lint:all       # Lint all services
cargo clippy --all-targets --all-features  # Rust linting
dotnet format --verify-no-changes          # C# formatting check

# Fix dead code detection
cargo clippy -- -W dead_code              # Find dead Rust code
npm run lint:unused                        # Find unused TypeScript/JS
```

## Architecture

### Current Implementation Structure
```
PK/
├── apps/
│   └── frontend/           # ✅ Angular 20.3.2 PWA application
│       ├── src/app/features/
│       │   ├── picking/
│       │   │   ├── picking-list/           # ✅ Run selection & filtering
│       │   │   └── picking-interface/      # ✅ Real-time picking workflow
│       │   ├── scales/
│       │   │   └── scale-management/       # ✅ Multi-scale monitoring
│       │   ├── auth/login/                 # ✅ Authentication component
│       │   └── dashboard/                  # ✅ Main dashboard
│       ├── src/core/
│       │   ├── services/                   # ✅ HTTP, auth services
│       │   └── guards/                     # ✅ Route protection
│       └── src/styles/
│           ├── globals.css                 # ✅ Main CSS entry with custom properties
│           ├── themes/nwfth-theme.css      # ✅ NWFTH brown brand theme
│           └── components/                 # ✅ Component-specific styles
├── docs/                   # ✅ Updated documentation
│   ├── architecture.md    # ✅ Concise architecture specification
│   └── prd.md             # ✅ Updated requirements with implementation status
├── package.json           # ✅ Root orchestration scripts
└── .env                   # Environment configuration
```

### Implemented Components (Angular 20)
1. **Picking List** (`picking-list.component.ts`)
   - Status filtering with Angular 20 signals
   - Modern `@for` and `@if` control flow syntax
   - Real-time progress tracking

2. **Picking Interface** (`picking-interface.component.ts`)
   - WebSocket-ready weight monitoring architecture
   - Tolerance validation with visual feedback
   - Session management for multi-item picking

3. **Scale Management** (`scale-management.component.ts`)
   - Multi-scale connection monitoring
   - Hardware configuration and calibration UI
   - Workstation assignment interface

### Technology Highlights
- **Modern CSS Architecture**: Component-based styling with CSS custom properties
- **NWFTH Brown Theme**: Brand-consistent warehouse interface with performance optimization
- **Angular 20 Signals**: Reactive state management throughout
- **PostCSS Integration**: Modern build pipeline with compressed production builds
- **Standalone Components**: No NgModules complexity
- **Responsive Design**: Warehouse tablet optimization with mobile fallback

### Port Configuration (Configurable via .env)
- Frontend: ✅ Configured via `FRONTEND_PORT` (default: 6060)
- Backend: 🚧 Configured via `BACKEND_PORT` (default: 7070)
- Bridge Service: 🚧 Configured via `BRIDGE_SERVICE_PORT` (default: 5000)

**Note**: All ports and URLs are dynamically configured from root `.env` file

## Database Integration

### Primary Database Architecture (Configured via .env)
- **Primary DB**: Configured via `DATABASE_SERVER` and `DATABASE_NAME`
- **Scale DB**: Configured via `SCALE_DB_SERVER` and `SCALE_DB_NAME`
- **Connection**: Tiberius SQL Server driver from Rust backend
- **Credentials**: Set via `DATABASE_USERNAME` and `DATABASE_PASSWORD`

### Key Database Tables
- `Cust_PartialRun`: Main partial picking runs
- `cust_PartialPicked`: Individual picked items with quantities
- `INMAST`: Item master with tolerance values (USER8/USER9)
- `TFC_Weighup_Controllers`: Scale hardware configuration
- `TFC_Weighup_WorkStations`: Workstation scale assignments
- `LotMaster` & `LotTransaction`: Lot tracking and transactions

### Field Name Convention
- Database uses **PascalCase** field names (e.g., `PickedPartialQty`, `RunNo`, `LineId`)
- Always verify actual schema using SQL Server MCP during development

## MCP Server Requirements

### Always Use During Development
- **context7**: For official library documentation and framework patterns
- **sqlserver**: For database schema verification, queries, and table inspection
- **sequential-thinking**: For complex analysis and systematic problem solving

### Database Inspection Commands
```bash
# Use these MCP commands frequently during development
mcp__sqlserver__describe_table('Cust_PartialRun')
mcp__sqlserver__describe_table('cust_PartialPicked')
mcp__sqlserver__list_tables()
mcp__sqlserver__read_query("SELECT TOP 5 * FROM Cust_PartialRun WHERE Status = 'NEW'")
```

## Weight Scale Integration

### Hardware Communication Flow
1. **USB Detection**: Windows WMI events detect scale connections
2. **COM Port Communication**: ScaleLibrary.dll handles 9600 baud, "P" command polling
3. **C# Bridge Service**: Isolates hardware layer, provides HTTP/WebSocket APIs
4. **Rust Backend**: Coordinates multi-scale sessions and business logic
5. **Angular Frontend**: Real-time weight display with WebSocket updates

### Scale Configuration
- Scales auto-register in `TFC_Weighup_Controllers` table
- Workstation assignments in `TFC_Weighup_WorkStations`
- Multiple concurrent scales supported per workstation
- Scale capacity recommendations based on ingredient weight ranges

## Development Guidelines

### Critical Rules - READ FIRST
- **🚨 NO HARDCODING**: Never hardcode IPs, ports, URLs, or configuration values
- **Environment First**: ALL configuration must use root `.env` file and environment variables
- **Configuration Scripts**: Always run `npm run env:config` and `npm run csp:update` before development
- **Documentation Consistency**: ALWAYS read `docs/environment-configuration.md` and `docs/architecture.md`
- **Single Command Development**: Always use `npm run dev:all` - configuration auto-updates included
- **Quality Gates**: ALWAYS run lint, clippy (Rust), and fix ALL warnings - never ignore, suppress, or hide warnings
- **Dead Code Policy**: Remove ALL dead code immediately - no unused functions, variables, or imports allowed
- **Warning Policy**: Fix ALL compilation warnings immediately - never ignore or suppress
- **Database Schema Verification**: Always use sqlserver MCP to verify field names and types
- **Environment Variables**: Check `.env` file first, use `mcp__sqlserver__` tools for database verification

### Code Standards
- **Frontend**: Follow Angular 20 + TypeScript best practices with NWFTH brown theme
- **Backend**: Rust with proper error handling, async/await patterns
- **Bridge Service**: C# with COM port management and WebSocket communication
- **Database**: Use parameterized queries, proper transaction handling

### Testing Requirements
- **Unit Tests**: Jest (Angular), built-in Rust testing, xUnit (.NET)
- **Integration Tests**: Database transaction testing, weight scale communication
- **E2E Tests**: Playwright for complete user workflows
- **Hardware Tests**: Manual validation with actual USB weight scales

## 🔧 Environment Configuration System

**CRITICAL**: All configuration is centralized in the root `.env` file. No more hardcoded IPs or ports!

### Configuration Architecture
- **Root `.env`**: Single source of truth for all system settings
- **Auto-Generation**: Environment files automatically generated from `.env`
- **Dynamic CSP**: Content Security Policy updates automatically
- **Cross-Platform**: Works across Angular, Rust, and C# services

### Key Environment Variables (see root .env for complete list)
```bash
# 🌍 Service Configuration
FRONTEND_PORT=6060
BACKEND_PORT=7070
BRIDGE_SERVICE_PORT=5000
SERVER_HOST=0.0.0.0

# 🗄️ Database Configuration
DATABASE_SERVER=192.168.0.86
DATABASE_NAME=TFCPILOT3
DATABASE_USERNAME=NSW
DATABASE_PASSWORD=B3sp0k3

# 🔐 Authentication
LDAP_URL=ldap://192.168.0.1
LDAP_BASE_DN=DC=NWFTH,DC=com
JWT_SECRET=your_secure_jwt_secret

# ⚖️ Hardware Configuration
DEFAULT_SCALE_BAUD_RATE=9600
WEIGHT_POLLING_INTERVAL_MS=400
WEBSOCKET_MAX_RESPONSE_TIME=100
```

### ⚡ Automatic Configuration System
All services automatically read from the root `.env` file:
- **Frontend**: Environment files auto-generated on `npm start`
- **Backend**: Rust services use environment variables directly
- **Bridge Service**: C# reads via `Environment.GetEnvironmentVariable()`
- **CSP Headers**: Dynamically updated with configured URLs

### 🚀 Usage
```bash
# 1. Edit root .env file with your settings
nano .env

# 2. Start services - configuration applies automatically
npm run dev:all

# Everything is configured dynamically!
```

### Development vs Production
- **Development**: `npm run dev:all` - auto-configures from `.env`
- **Production**: `npm run build:prod` - production environment auto-generated

### 📚 Complete Configuration Documentation
See `/docs/environment-configuration.md` for comprehensive configuration guide including:
- Configuration mapping from hardcoded to environment variables
- Service-specific configuration details
- Troubleshooting and best practices
- Advanced configuration scenarios

## 🧪 Testing & Authentication

### Test Credentials for Development
**Primary Test Account**:
- **Username**: `deachawat`
- **Password**: `Wind@password9937`

### Testing Usage
```bash
# Playwright E2E Testing
npm run test:e2e           # Full E2E test suite with test credentials
npm run test:e2e:headed    # Run with browser visible for debugging
npm run test:e2e:debug     # Debug mode with step-through

# Manual Testing
# Use deachawat / Wind@password9937 for:
# - LDAP/AD authentication testing
# - Manual login form validation
# - Browser-based testing scenarios
```

### Authentication Configuration
- **LDAP Settings**: Configured via `LDAP_URL` and `LDAP_BASE_DN` in `.env`
- **Database Auth**: Uses `DATABASE_USERNAME` and `DATABASE_PASSWORD` from `.env`
- **JWT Configuration**: Managed via `JWT_SECRET` and `JWT_DURATION_HOURS`

## Key Business Logic (Current Implementation)

### ✅ Implemented Frontend Workflows

#### Picking List Workflow (`picking-list.component.ts`)
1. **Status Filtering**: Filter runs by NEW, IN_PROGRESS, COMPLETED status
2. **Priority Display**: Visual HIGH/MEDIUM/LOW priority indicators
3. **Progress Tracking**: Real-time item counts and completion status
4. **Navigation**: Click-to-navigate to picking interface

#### Picking Interface Workflow (`picking-interface.component.ts`)
1. **Real-time Weight Display**: Live weight updates (WebSocket architecture ready)
2. **Tolerance Validation**: Visual color-coded feedback system
3. **Item Progress**: Multi-item session with completion tracking
4. **Scale Controls**: Tare, calibrate, and recording functionality
5. **Lot Assignment**: Input fields for lot number tracking

#### Scale Management Workflow (`scale-management.component.ts`)
1. **Multi-Scale Monitoring**: Real-time connection status for 10+ scales
2. **Hardware Configuration**: COM port, capacity, and firmware display
3. **Workstation Assignment**: Scale-to-workstation mapping
4. **Calibration Interface**: Scale testing and calibration controls

### 🚧 Planned Backend Integration
- **Database Transactions**: 5-table atomic pattern with TFCPILOT3
- **Weight Validation**: INMAST.USER8/USER9 tolerance ranges
- **Session Management**: Multi-user workstation coordination
- **Label Generation**: 4x4 thermal label printing

### Modern Angular 20 Features Used
- **Signals**: Reactive state for weight updates and filtering
- **Control Flow**: `@if` and `@for` syntax for cleaner templates
- **Standalone**: No NgModule complexity
- **TypeScript 5.9**: Latest language features

## Mobile-Rust Pattern Reference

This project follows proven patterns from the existing Mobile-Rust bulk picking system located in `/docs/Mobile-Rust/`. Key references:
- **NWFTH Brown Theme**: Consistent color palette and component styling
- **Database Patterns**: Similar SQL Server integration and transaction handling
- **Development Workflow**: Same npm run dev:all pattern and build processes
- **Authentication**: LDAP + SQL Server dual authentication approach

Note: Mobile-Rust is a reference implementation - PK system is completely independent with no code dependencies.

## 🔧 Environment Configuration Resources

### Complete Configuration Guide
See `/docs/environment-configuration.md` for comprehensive documentation on:
- Environment variable setup and usage
- Configuration script operation (env-config.js, update-csp.js)
- Service configuration patterns (Angular, Rust, C#)
- Development vs production environment management
- Troubleshooting and best practices

### Configuration Verification
```bash
# Verify configuration is working
npm run dev:clean          # Clean previous processes
npm run dev:all            # Start all services with current .env
# Check console for loaded configuration values
```

### Environment Configuration Scripts (Auto-Run)
- **`scripts/env-config.js`**: Generates Angular environment files from root `.env`
- **`scripts/update-csp.js`**: Updates CSP headers dynamically based on environment URLs
- **Integration**: Both scripts run automatically on `npm start` and `npm run build`

**Key Principle**: The root `.env` file is the single source of truth for ALL system configuration. No hardcoded values should exist anywhere in the codebase.
