# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PK (Partial Picking System) is a greenfield Angular 20 + Rust + C# fullstack application that modernizes legacy PartialPickingInKG.exe into a web-based weight scale integrated picking system. The system follows Mobile-Rust architectural patterns while maintaining complete operational independence in the `/PK/` folder.

## Required MCP Servers for Development

**Always use these MCP servers during development:**
- **Context7 MCP**: For official Angular, Rust, and library documentation lookup
- **SqlServer MCP**: For TFCPILOT3 database schema verification and queries
- **Playwright MCP**: For E2E testing with login credentials: `deachawat / Wind@password9937`

## Critical Documentation Requirements

**Before any development work, always read:**
- `@docs/architecture.md` - Complete fullstack architecture and technical patterns
- `@docs/prd.md` - Business requirements and exact database transaction specifications

## Architecture Overview

### Three-Tier Architecture
- **Angular 20 Frontend** (:6060) - Real-time weight display, NWFTH brown/amber theme
- **Rust Axum Backend** (:7070) - Business logic, database operations, WebSocket connections
- **C# Bridge Service** (:5000) - Hardware integration with ScaleLibrary.dll for USB weight scales

### Key Integration Points
- **WebSocket**: Real-time weight updates (≤100ms response time requirement)
- **5-Table Atomic Transactions**: cust_PartialPicked, Cust_PartialLotPicked, LotMaster, LotTransaction, Cust_PartialPalletLotPicked
- **Hardware Protocol**: ScaleLibrary.dll COM port communication (9600 baud, "P" command polling every 400ms)

## Technology Stack

### Frontend (Angular 20)
- **Framework**: Angular 20 with TypeScript 5.3+
- **UI Library**: shadcn/ui with NWFTH brown theme
- **Styling**: Tailwind CSS v4 with `tw-` prefix
- **State Management**: Angular Signals
- **Build**: Angular CLI with Webpack

### Backend (Rust)
- **Framework**: Axum 0.7+ for web services
- **Database**: Tiberius driver for SQL Server
- **Real-time**: WebSocket support for live weight updates
- **Testing**: Built-in Rust testing framework

### Hardware Integration (C#)
- **Bridge Service**: C# console application exposing HTTP API
- **Hardware Library**: ScaleLibrary.dll (existing, cannot modify)
- **Protocol**: Serial port communication for weight scales

### Database
- **Primary**: TFCPILOT3 SQL Server (configurable via PRIMARY_DB env var)
- **Scale Config**: TFCLIVE (required by ScaleLibrary.dll, hardcoded)
- **Key Tables**: Cust_Partial* series, LotMaster, LotTransaction, INMAST (USER8/USER9 tolerances)

## Development Commands

Since this is a greenfield project, these commands will be implemented following Mobile-Rust patterns:

### Setup and Development
```bash
# Install dependencies (when implemented)
npm install

# Start all services in development mode (when implemented)
npm run dev:all

# Build production (when implemented)
npm run build:all

# Run frontend only (when implemented)
npm run dev:frontend

# Run backend only (when implemented)
npm run dev:backend
```

### Testing
```bash
# Unit tests - Frontend (when implemented)
npm run test:frontend

# Unit tests - Backend (when implemented)
cargo test

# E2E tests with Playwright (when implemented)
npm run test:e2e

# Integration tests (when implemented)
npm run test:integration
```

### Quality Checks
```bash
# Lint frontend (when implemented) - MUST fix all warnings, never hide them
npm run lint

# Lint backend (when implemented) - MUST fix all clippy warnings, never suppress
cargo clippy

# Type check (when implemented)
npm run typecheck

# Format code (when implemented)
npm run format
```

### Critical Quality Rules
- **ALWAYS run linting before completing tasks** - `npm run lint` for frontend, `cargo clippy` for backend
- **NEVER hide or suppress warnings** - All linting warnings MUST be fixed, not ignored
- **Zero tolerance for lint violations** - No commits allowed with outstanding lint warnings
- **Fix, don't suppress** - Address root cause of warnings rather than using suppress annotations

## Critical Database Implementation Details

### 5-Table Transaction Pattern
The system MUST implement this exact atomic transaction sequence:

1. **cust_PartialPicked UPDATE**: Set `PickedPartialQty` (NOT PickedPartialQtyKG) using composite key (RunNo, RowNum, LineId)
2. **Cust_PartialLotPicked INSERT**: Lot allocation with LotTranNo as primary key
3. **LotMaster UPDATE**: Increment QtyCommitSales for inventory commitment
4. **LotTransaction INSERT**: Audit trail with TransactionType = 5
5. **Cust_PartialPalletLotPicked INSERT**: Pallet traceability record

### Field Precision and Schema
- **Weight Fields**: decimal(18,6) precision for all weight-related columns
- **Primary Keys**: Composite keys (RunNo, RowNum, LineId) for cust_PartialPicked
- **User Tracking**: PHUVIS format consistency across all tables
- **Timezone**: Bangkok (UTC+7) for all timestamps

## Weight Scale Integration Requirements

### Hardware Configuration
- **Auto-Detection**: Via CLIENTNAME/COMPUTERNAME environment variables
- **Database Config**: TFC_Weighup_Controllers and TFC_Weighup_WorkStations tables
- **COM Port Settings**: 9600 baud rate, configurable parity from database

### Tolerance System (Dual Validation)
- **Visual Feedback**: ScaleLibrary.dll progress bar (green/red) for operator guidance
- **Business Validation**: INMAST.USER8/USER9 per-ItemKey tolerances for pick confirmation

### Performance Requirements
- **Response Time**: ≤100ms from scale to UI display
- **Polling**: Every 400ms with "P" command
- **Concurrent Users**: Support 10+ workstations simultaneously

## NWFTH Brown Theme Standards

### Color Palette (Mobile-Rust Compatible)
```css
--color-brand-brown: #523325;    /* Dark Coffee Brown - Primary */
--color-brand-amber: #F0B429;    /* Golden Amber - Accent */
--color-brand-cream: #F5F5DC;    /* Soft Cream - Background */
```

### Component Standards
- **Touch Targets**: 44px minimum for warehouse tablets
- **Typography**: Inter font family with consistent hierarchy
- **Accessibility**: WCAG AA compliance
- **Component Library**: shadcn/ui with NWFTH custom classes

## Environment Configuration

### Required Environment Variables
```bash
# Primary database (NEVER hardcode TFCPILOT3)
PRIMARY_DB=TFCPILOT3

# Scale configuration database (hardcoded in ScaleLibrary.dll)
SCALE_DB=TFCLIVE

# Service ports
FRONTEND_PORT=6060
BACKEND_PORT=7070
BRIDGE_SERVICE_PORT=5000

# Authentication
LDAP_SERVER=<ldap_server>
LDAP_DOMAIN=<domain>
```

## Testing Strategy

### E2E Testing with Playwright
- **Login Credentials**: deachawat / Wind@password9937
- **Test Scenarios**: Complete partial picking workflows
- **Hardware Simulation**: Mock weight scale responses for automated testing
- **Multi-User**: Concurrent workstation simulation

### Critical Test Coverage
- **Transaction Integrity**: 5-table atomic operations under stress
- **Weight Scale Communication**: Hardware integration with actual devices
- **Concurrency**: 10+ simultaneous users without conflicts
- **Performance**: ≤100ms weight reading requirements

## Development Guidelines

### Code Organization
- **Frontend**: `/frontend/src/` - Angular components, services, and assets
- **Backend**: `/backend/src/` - Rust services, database repositories, and API handlers
- **Bridge Service**: `/bridge/` - C# weight scale integration service
- **Documentation**: `/docs/` - Architecture, PRD, and implementation guides

### Database Schema Verification
- **Always verify field names, types, and constraints using SqlServer MCP**
- **Case-sensitive field matching** required for SQL Server compatibility
- **Primary key validation** for all transaction operations
- **Decimal precision** verification for weight calculations

### Commit Standards
- **Professional Messages**: Descriptive, without AI signatures
- **Atomic Commits**: Single logical changes per commit
- **Mobile-Rust Pattern**: Follow established commit message patterns

## Project Structure (When Implemented)

```
/PK/
├── frontend/               # Angular 20 application
│   ├── src/app/           # Components, services, guards
│   ├── src/assets/        # NWFTH themed assets
│   └── tailwind.config.js # Brown theme configuration
├── backend/               # Rust Axum server
│   ├── src/api/          # REST endpoints and WebSocket handlers
│   ├── src/database/     # Repository pattern with Tiberius
│   └── src/models/       # Business logic and data structures
├── bridge/                # C# weight scale service
│   ├── ScaleService/     # Console application
│   └── ScaleLibrary.dll  # Existing hardware library
├── docs/                  # Architecture and business requirements
│   ├── architecture.md   # Complete technical architecture
│   └── prd.md           # Product requirements and specifications
└── scripts/               # Build and deployment automation
```

## Key Success Factors

1. **Follow Mobile-Rust Patterns**: Proven architecture, avoid reinventing solutions
2. **Hardware-First Approach**: Weight scale integration drives core functionality
3. **Database Schema Compliance**: Exact field matching for existing partial picking data
4. **Real-Time Performance**: WebSocket architecture for ≤100ms response times
5. **Multi-User Concurrency**: Session management for 10+ simultaneous workstations
6. **NWFTH Brand Consistency**: Brown/amber theme matching existing Mobile-Rust interface