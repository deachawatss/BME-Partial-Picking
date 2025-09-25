# PK (Partial Picking System) Architecture

## Overview

**PK System** modernizes the legacy PartialPickingInKG.exe into a web-based warehouse partial picking solution with real-time weight scale integration.

**Key Goals:**
- Real-time weight scale communication (≤100ms response)
- Multi-user operations across 10+ workstations
- NWFTH brown theme consistency with Mobile-Rust patterns
- Complete operational independence in `/PK/` folder

## Technology Stack

### Frontend - Angular 20.3.2
- **Framework**: Angular 20 with standalone components
- **Styling**: Modern CSS Architecture with NWFTH theme system
- **State Management**: Angular 20 Signals for reactive data
- **Template Syntax**: Modern control flow (`@if`, `@for`, `@switch`)
- **Build Tool**: Angular CLI 20.3.3 + PostCSS
- **Port**: http://localhost:6060

### Backend - Rust (Planned)
- **Framework**: Axum web framework
- **Database**: Tiberius SQL Server driver for TFCPILOT3
- **WebSockets**: Real-time weight updates
- **Port**: http://localhost:7070

### Bridge Service - C# (Planned)
- **Purpose**: ScaleLibrary.dll hardware integration
- **Framework**: .NET 8+ minimal APIs
- **Communication**: HTTP/WebSocket to Rust backend
- **Ports**: :5000 (base), :5001-5010 (individual scales)

### Database
- **Primary**: TFCPILOT3 (SQL Server) with Tiberius driver & connection pooling
- **Fallback**: TFCLIVE for scale configuration if needed
- **Flow**: `Angular → HTTP API → Rust Backend → Tiberius → SQL Server`

#### Critical Tables & Fields
- **`Cust_PartialRun`**: Main picking runs (Status: NEW → PRINT progression)
- **`cust_PartialPicked`**: Individual items with **`PickedPartialQty` (float)** - actual scale weights
- **`INMAST`**: Item master with **`USER8/USER9`** tolerance fields for weight validation
- **`TFC_Weighup_Controllers`**: Scale hardware specs (PortName, BaudRate, auto-registered)
- **`TFC_Weighup_WorkStations`**: Scale-to-workstation assignments
- **`LotMaster`/`LotTransaction`**: Inventory tracking with atomic lot deductions

#### Transaction Patterns
- **5-Table Atomic Updates**: Coordinated partial picking, lot allocation, and audit trail
- **Multi-User Sessions**: Concurrent workstation operations with proper isolation
- **Weight Storage**: Scale reading → business validation → database persistence

## Current Implementation Status

### ✅ Completed
- **Angular 20 Frontend**: Fully functional with 3 main components
  - `picking-list.component`: Run selection with filtering
  - `picking-interface.component`: Real-time picking interface
  - `scale-management.component`: Multi-scale monitoring
- **Modern CSS Architecture**: Component-based styling with NWFTH brown theme
- **Component Architecture**: Standalone components with signal-based reactivity
- **Build System**: Clean builds with Angular 20 + Tailwind v4 integration

### 🚧 In Progress
- Backend Rust service implementation
- C# bridge service for scale hardware
- Database integration and API endpoints

### 📋 Planned
- WebSocket connections for real-time weight updates
- Authentication system (LDAP + SQL Server)
- Production deployment configuration

## Component Architecture

### Frontend Structure
```
src/app/
├── features/
│   ├── picking/
│   │   ├── picking-list/           # Run selection & filtering
│   │   └── picking-interface/      # Real-time picking workflow
│   ├── scales/
│   │   └── scale-management/       # Multi-scale monitoring
│   ├── auth/
│   │   └── login/                  # Authentication
│   └── dashboard/                  # Main dashboard
├── core/
│   ├── services/                   # HTTP, WebSocket, auth
│   ├── guards/                     # Route protection
│   └── models/                     # TypeScript interfaces
└── shared/                         # Reusable components
```

### Key Features Implemented
- **Real-time Weight Display**: WebSocket-ready weight monitoring
- **Multi-Scale Support**: Concurrent scale session management
- **Tolerance Validation**: Visual feedback with color-coded indicators
- **Progress Tracking**: Run completion with item-level status
- **NWFTH Theme**: Consistent brown/amber branding
- **Responsive Design**: Optimized for warehouse displays (1920x1080+)

## Development Workflow

### Quick Start
```bash
# Root level - start all services
npm run dev:all

# Individual services
npm run dev:frontend    # Angular on :6060
npm run dev:backend     # Rust on :7070 (when ready)
npm run dev:bridge      # C# bridge on :5000 (when ready)
```

### Build & Test
```bash
npm run build:all       # Build all services
npm run test:all        # Run all tests
```

### Dependencies
```bash
# Frontend (Angular 20.3.2)
"@angular/core": "^20.3.2"
"tailwindcss": "^4.1.13"
"@tailwindcss/postcss": "^4.1.13"

# Root (Orchestration)
"concurrently": "^8.2.2"
```

## Key Design Decisions

### Why Angular 20?
- **Modern Signals**: Ideal for real-time weight updates
- **Control Flow**: Cleaner templates with `@if`/`@for`
- **Performance**: Better bundle optimization for warehouse workstations
- **Standalone Components**: No NgModules complexity

### Why Modern CSS Architecture?
- **Component System**: Structured styles with cards, buttons, inputs, and animations
- **Performance Optimized**: Compressed CSS from 162.70 kB to 22.46 kB in production
- **CSS Custom Properties**: Theme variables for consistent NWFTH branding
- **Responsive Design**: Warehouse tablet optimization with mobile fallback
- **Accessibility**: WCAG compliance with high contrast and focus states

### Why Microservices?
- **Technology Optimization**: Angular for UI, Rust for performance, C# for hardware
- **Independent Scaling**: Each service scales based on needs
- **Hardware Isolation**: C# bridge isolates ScaleLibrary.dll dependencies

## Integration Points

### Weight Scale Flow
```
USB Scale → ScaleLibrary.dll → C# Bridge → Rust Backend → WebSocket → Angular Frontend
```

### Database Flow
```
Angular → HTTP API → Rust Backend → Tiberius Driver → TFCPILOT3 SQL Server
```

#### Scale Hardware Integration
```
USB Detection → WMI Events → C# Bridge → TFC_Weighup_Controllers → Workstation Assignment
```

#### Weight Data Persistence
```
Scale Reading → Business Validation (INMAST USER8/USER9) → PickedPartialQty → Lot Deduction
```

#### Transaction Coordination
```
5-Table Atomic Pattern: PartialRun → PartialPicked → LotMaster → LotTransaction → Audit Trail
```

### Authentication Flow
```
Angular → Rust API → LDAP Validation → SQL User Lookup → JWT Token → Protected Routes
```

## Backend Implementation Guide

### Core API Endpoints (Rust Axum)

#### Partial Picking Workflow
- **`GET /api/runs`** - List runs with status filtering (`NEW`, `PRINT`)
- **`GET /api/runs/{runId}`** - Complete run details for header panel
- **`GET /api/runs/{runId}/items`** - Batch ticket partials for data grid
- **`POST /api/runs/{runId}/save`** - Save complete picking session (5-table transaction)
- **`POST /api/runs/{runId}/print`** - Generate reports and labels

#### Weight Scale Integration
- **`GET /api/weight/current`** - Current scale reading with tolerance validation
- **`POST /api/weight/fetch`** - Fetch Weight button → populates Weight input field
- **`GET /api/runs/{runId}/lots`** - Available lots for item selection
- **`POST /api/runs/{runId}/lots`** - Add lot to partial picking

#### WebSocket Endpoints
- **`/ws/weight/{workstationId}`** - Real-time weight updates and scale status

### Database Tables & Column Updates

#### 5-Table Atomic Transaction Pattern
When saving a partial picking session, update these tables atomically:

**1. `Cust_PartialRun`**
```sql
UPDATE Cust_PartialRun SET
    Status = 'PRINT',
    ModifiedBy = @UserId,
    ModifiedDate = GETDATE()
WHERE RunNo = @RunNo AND RowNum = @RowNum
```

**2. `cust_PartialPicked`** (Primary weight storage)
```sql
UPDATE cust_PartialPicked SET
    PickedPartialQty = @WeightInputValue,  -- From Weight input field (populated by Fetch Weight button)
    PickingDate = GETDATE(),
    ModifiedBy = @UserId,
    ModifiedDate = GETDATE()
WHERE RunNo = @RunNo AND RowNum = @RowNum AND LineId = @LineId
```

**3. `Cust_PartialLotPicked`** (Lot allocation tracking)
```sql
INSERT INTO Cust_PartialLotPicked
    (RunNo, RowNum, LineId, LotNo, QtyPicked, UserId, CreatedDate)
VALUES (@RunNo, @RowNum, @LineId, @LotNo, @WeightInputValue, @UserId, GETDATE())
```

**4. `LotMaster`** (Inventory deduction)
```sql
UPDATE LotMaster SET
    QtyAvailable = QtyAvailable - @WeightInputValue
WHERE ItemKey = @ItemKey AND LotNo = @LotNo
```

**5. `LotTransaction`** (Audit trail)
```sql
INSERT INTO LotTransaction
    (ItemKey, LotNo, TransactionType, Quantity, UserId, CreatedDate, Reference)
VALUES (@ItemKey, @LotNo, 'PARTIAL_PICK', @WeightInputValue, @UserId, GETDATE(), @RunNo)
```

#### Scale Hardware Tables (Auto-managed)
**`TFC_Weighup_Controllers`** - Auto-populated on USB detection
- ControllerID, PortName, BaudRate, Parity, DataBits, StopBits

**`TFC_Weighup_WorkStations`** - Workstation assignments
- WorkstationName, ControllerID

#### Business Validation Query
```sql
-- Get tolerance values for weight validation
SELECT USER8 as MinTolerance, USER9 as MaxTolerance
FROM INMAST
WHERE ItemKey = @ItemKey
```

### Weight Input Workflow
1. **Scale Reading**: Live weight displayed via WebSocket (for reference)
2. **Fetch Weight Button**: Copies current scale reading → Weight input field
3. **Manual Entry**: User can manually type/adjust Weight input field value
4. **Save Action**: Weight input field value → `PickedPartialQty` database field
5. **Database Storage**: All 5 tables use the Weight input field value, NOT direct scale reading

### Implementation Notes
- **Weight Source**: Always use Weight input field value (`@WeightInputValue`) for database operations
- **Scale Integration**: Fetch Weight button populates input field, but user controls final value
- **Transaction Isolation**: Use SQL Server transaction with proper locking for 5-table pattern
- **Concurrent Sessions**: Handle multiple users picking simultaneously
- **Weight Validation**: Query INMAST tolerance before confirming picks
- **Error Recovery**: Rollback entire 5-table transaction on any failure

## Scale.dll Database Configuration

### Configuration Strategy
For the C# bridge service ScaleLibrary.dll integration, use a **Configuration File + Environment Variable Fallback** approach to switch between TFCLIVE and TFCPILOT3 databases without requiring DLL rebuilds.

### Implementation Pattern
```csharp
private string GetDatabaseName()
{
    // 1. Check environment variable first (automation/deployment)
    string envDb = Environment.GetEnvironmentVariable("PK_DATABASE");
    if (!string.IsNullOrEmpty(envDb)) return envDb;

    // 2. Check configuration file (manual operations)
    string configDb = ReadConfigFile("scale.config");
    if (!string.IsNullOrEmpty(configDb)) return configDb;

    // 3. Hardcoded fallback (ultimate reliability)
    return "TFCPILOT3";
}
```

### Configuration File Format
**scale.config** (placed alongside Scale.dll):
```ini
[Database]
Name=TFCPILOT3
Server=192.168.0.86
Port=49381

[Backup]
Name=TFCLIVE
Server=192.168.0.86
Port=49381
```

### Operational Benefits
- **No Rebuilds**: Switch databases by editing text file or setting environment variable
- **Warehouse Friendly**: IT staff can easily switch during emergencies or maintenance
- **Deployment Ready**: Environment variable override supports automated deployments
- **Reliable**: Multiple fallback layers prevent system failures
- **Auditable**: Configuration file provides clear visibility of current database

### Database Switching Scenarios
- **Daily Operations**: Use TFCPILOT3 (primary) via default configuration
- **Emergency Failover**: Edit scale.config to switch to TFCLIVE
- **Testing/Staging**: Set `PK_DATABASE=TFCLIVE` environment variable
- **Automated Deployment**: PowerShell scripts can manage environment variables

---

**Last Updated**: 2025-09-25 | **Version**: Angular 20.3.2, Tailwind v4.1.13