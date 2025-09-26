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

### Development Commands
```bash
# Start all services in development mode (PRIMARY COMMAND)
npm run dev:all         # Kills existing processes, then starts all services

# Process management
npm run dev:clean       # Kill all development processes and free ports
npm run dev:stop        # Same as dev:clean (alias)

# Start individual services
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

### Port Configuration
- Frontend: ✅ http://localhost:6060 (fully functional)
- Backend: 🚧 http://localhost:7070 (Rust Axum - planned)
- Bridge Service: 🚧 http://localhost:5000 (C# - planned)

## Database Integration

### Primary Database Architecture
- **TFCPILOT3**: Primary database for all read-write operations
- **TFCLIVE**: Fallback/scale configuration source if needed
- **Connection**: Tiberius SQL Server driver from Rust backend

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
- **Documentation Consistency**: ALWAYS read `docs/architecture.md` before starting any development work
- **Documentation Updates**: If code changes contradict documentation, update docs immediately to match implementation
- **Single Command Development**: Always use `npm run dev:all` - never run separate cargo/npm commands
- **Quality Gates**: ALWAYS run lint, clippy (Rust), and fix ALL warnings - never ignore, suppress, or hide warnings
- **Dead Code Policy**: Remove ALL dead code immediately - no unused functions, variables, or imports allowed
- **Warning Policy**: Fix ALL compilation warnings immediately - never ignore or suppress
- **Database Schema Verification**: Always use sqlserver MCP to verify field names and types
- **Real-time Testing**: Test weight scale integration with actual hardware when possible

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

## Environment Configuration

### Required Environment Variables
```bash
# Database Configuration
PRIMARY_DB=TFCPILOT3
SCALE_DB=TFCPILOT3
DB_SERVER=192.168.0.86
DB_PORT=49381

# Service Ports
FRONTEND_PORT=6060
BACKEND_PORT=7070
BRIDGE_SERVICE_PORT=5000

# Authentication
LDAP_SERVER=ldap://192.168.0.1
JWT_SECRET=your_jwt_secret

# Hardware Configuration
DEFAULT_SCALE_BAUD_RATE=9600
WEIGHT_POLLING_INTERVAL_MS=400
WEBSOCKET_MAX_RESPONSE_TIME=100
```

### Development vs Production
- **Development**: Use npm run dev:all for unified development server
- **Production**: Separate builds required - frontend (ng build), backend (cargo build --release), bridge service (dotnet publish)

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


# Claude-Codex Orchestrator/Worker Architecture (2025-09-01)
## Paradigm: Claude as Orchestrator, Codex as Workers
### Division of Responsibilities
#### Claude (Orchestrator - Opus/Sonnet)
**Primary Role**: High-level thinking, planning, and GitHub operations
- 🧠 **Thinking & Analysis**: Strategic planning, decision making, result interpretation
- 📋 **GitHub Operations**: All `gh` CLI operations (issues, PRs, comments, merges)
- 🎛️ **Worker Management**: Spawn, monitor, and coordinate multiple Codex instances
- 📊 **Progress Monitoring**: Track worker status using `BashOutput`
- 🔄 **Result Aggregation**: Combine outputs from multiple workers
- 📝 **Documentation**: Write retrospectives, update AGENTS.md
- 🔍 **Quality Control**: Review worker outputs before GitHub operations
#### Codex (Workers)
**Primary Role**: Execution, implementation, and file operations
- ⚙️ **Code Execution**: Run commands, analyze code, implement features
- 📁 **File Operations**: Read, write, edit, search through codebases
- 🔧 **Implementation**: Make code changes, refactor, fix bugs
- 🚀 **Parallel Processing**: Multiple instances for concurrent tasks
- 📈 **Analysis Tasks**: Deep code analysis, pattern detection
- 🧪 **Testing**: Run tests, validate changes
### Implementation Patterns
#### Single Worker Pattern
```bash
# Claude delegates a single task to Codex
codex exec -s danger-full-access -c model_reasoning_effort="low" "Task description"
```
#### Multiple Worker Pattern
```bash
# Claude spawns multiple Codex workers for parallel execution
# Worker 1: Frontend analysis
codex exec -s danger-full-access "Analyze all React components" &  # Returns bash_1
# Worker 2: Backend analysis  
codex exec -s danger-full-access "Review API endpoints" &  # Returns bash_2
# Worker 3: Test coverage
codex exec -s danger-full-access "Check test coverage" &  # Returns bash_3
# Claude monitors all workers
BashOutput bash_1  # Monitor frontend analysis
BashOutput bash_2  # Monitor backend analysis
BashOutput bash_3  # Monitor test coverage
# Claude aggregates results and creates GitHub issue/PR
```
#### Background Worker Pattern
```bash
# For long-running tasks, use background execution
codex exec -s danger-full-access -c model_reasoning_effort="high" \
  "Complex refactoring task" \
  run_in_background: true  # Returns bash_id
# Claude continues other work while monitoring
BashOutput bash_id  # Check progress periodically
```
### Workflow Examples
#### Example 1: Multi-File Refactoring
```
1. Claude analyzes requirements
2. Claude spawns 3 Codex workers:
   - Worker A: Refactor components
   - Worker B: Update tests
   - Worker C: Update documentation
3. Claude monitors all three in parallel
4. Claude aggregates changes
5. Claude creates PR with gh CLI
```
#### Example 2: Codebase Analysis
```
1. Claude plans analysis strategy
2. Claude delegates to Codex:
   - "Analyze security vulnerabilities"
   - "Check code quality metrics"
   - "Review dependency updates"
3. Codex executes and returns findings
4. Claude creates comprehensive GitHub issue
```
#### Example 3: Bug Fix Workflow
```
1. Claude reads GitHub issue
2. Claude delegates investigation to Codex
3. Codex finds root cause and implements fix
4. Claude reviews the fix
5. Claude creates PR and updates issue
```
### Best Practices
#### For Claude (Orchestrator)
1. **Always think first**: Plan before delegating to workers
2. **Use TodoWrite**: Track worker tasks and progress
3. **Batch operations**: Spawn multiple workers when tasks are independent
4. **Handle GitHub**: All `gh` operations should be done by Claude
5. **Aggregate intelligently**: Combine worker outputs meaningfully
6. **Monitor actively**: Use `BashOutput` to track worker progress
7. **Kill stuck workers**: Use `KillBash` if workers hang
#### For Codex (Workers)
1. **Focused tasks**: Give Codex specific, well-defined tasks
2. **Appropriate reasoning**: Use `low` for simple, `high` for complex
3. **Parallel when possible**: Independent tasks should run concurrently
4. **Clear output**: Request structured output for easy aggregation
5. **Error handling**: Expect and handle worker failures gracefully
6. **CRITICAL - Planning vs Implementation**:
   - For `nnn` (planning): ALWAYS include "DO NOT modify/implement/write files"
   - For `gogogo` (implementation): Allow file modifications
   - Use explicit instructions: "Analyze and DESIGN ONLY" vs "Implement the following"
### Communication Patterns
#### Claude → Codex
```bash
# Direct execution with results
result=$(codex exec -s danger-full-access "task")
# Background with monitoring
codex exec -s danger-full-access "task" & # run_in_background: true
BashOutput bash_id
```
#### Codex → Claude
- Returns via stdout/stderr
- Exit codes indicate success/failure
- Structured output (JSON, markdown) for easy parsing
#### Claude → GitHub
```bash
# All GitHub operations handled by Claude
gh issue create --title "Title" --body "Body"
gh pr create --title "Title" --body "Body"
gh issue comment 123 --body "Comment"
```
### Anti-Patterns to Avoid
1. ❌ **Codex doing GitHub operations** - Only Claude should interact with GitHub
2. ❌ **Claude doing file operations** - Delegate file work to Codex
3. ❌ **Serial execution of independent tasks** - Use parallel workers
4. ❌ **Not monitoring workers** - Always track progress with BashOutput
5. ❌ **Over-reasoning for simple tasks** - Use appropriate reasoning levels
6. ❌ **Under-utilizing parallelism** - Spawn multiple workers when possible
### Performance Guidelines
#### Reasoning Levels by Task Type
- **minimal**: File listing, simple searches (~5-10s)
- **low**: Code formatting, simple refactoring (~10-15s)
- **medium**: Feature implementation, bug fixes (~15-25s)
- **high**: Complex analysis, architecture changes (~30-60s+)
#### Parallel Execution Limits
- Maximum recommended concurrent workers: 5-10
- Monitor system resources when spawning many workers
- Use `ps aux | grep codex` to check running instances
### Example: Complete Feature Implementation
```bash
# Claude's workflow for implementing a new feature
# 1. Claude analyzes requirements and creates plan
TodoWrite "Plan feature implementation"
# 2. Claude spawns multiple Codex workers
worker1=$(codex exec -s danger-full-access "Implement backend API endpoint" &)
worker2=$(codex exec -s danger-full-access "Create frontend components" &)
worker3=$(codex exec -s danger-full-access "Write unit tests" &)
worker4=$(codex exec -s danger-full-access "Update documentation" &)
# 3. Claude monitors all workers
BashOutput $worker1
BashOutput $worker2
BashOutput $worker3
BashOutput $worker4
# 4. Claude aggregates results
# (Combine outputs, resolve conflicts, ensure consistency)
# 5. Claude handles GitHub
gh issue comment $issue_number --body "Feature implemented"
gh pr create --title "feat: New feature" --body "Details..."
```
### Metrics & Monitoring
Track these metrics for optimization:
- Worker completion times by reasoning level
- Parallel vs serial execution time savings
- Worker failure rates by task type
- GitHub operation success rates
- Overall workflow completion times
### Migration Path
For existing workflows:
1. Identify file-heavy operations → Delegate to Codex
2. Identify GitHub operations → Keep with Claude
3. Identify independent tasks → Parallelize with multiple workers
4. Identify complex analysis → Use high-reasoning Codex
5. Test and optimize reasoning levels
**Last Updated**: 2025-09-02
**Architecture Version**: 2.0
**Key Innovation**: Orchestrator/Worker pattern with Claude/Codex