# PK (Partial Picking System) Product Requirements Document

## Project Overview

**PK System** modernizes the legacy PartialPickingInKG.exe into a web-based warehouse partial picking solution with real-time weight scale integration, built on Angular 20 + Rust + C# architecture.

### Goals Achieved
- ✅ **Modern Angular 20 Interface**: Fully functional with NWFTH brown theme
- ✅ **Component Architecture**: 3 main components with signal-based reactivity
- ✅ **Modern CSS System**: Angular 20.3.2 + custom CSS architecture with performance optimization
- 🚧 **Real-time Weight Integration**: Architecture designed, implementation in progress
- 🚧 **Multi-user Operations**: Database schema planned for 10+ concurrent workstations

### Technology Implementation
- **Frontend**: Angular 20.3.2 with modern `@if`/`@for` control flow syntax
- **Styling**: Modern CSS architecture with NWFTH theme and component system
- **State Management**: Angular 20 Signals for reactive data flow
- **Build**: Angular CLI 20.3.3 + PostCSS with production optimization

### Change Log
| Date | Version | Description | Status |
|------|---------|-------------|---------|
| 2025-09-24 | 1.0 | Initial PRD creation and requirements analysis | ✅ Completed |
| 2025-09-25 | 1.1 | Angular 20 frontend implementation with 3 core components | ✅ Completed |
| 2025-09-25 | 1.2 | Modern CSS architecture implementation with NWFTH theme | ✅ Completed |

## Current Implementation Status

### ✅ Completed Components

#### 1. Picking List Component (`picking-list.component.ts`)
- **Purpose**: Run selection and filtering interface
- **Features**:
  - Status-based filtering (NEW, IN_PROGRESS, COMPLETED)
  - Visual priority indicators (HIGH, MEDIUM, LOW)
  - Real-time progress tracking with item counts
  - NWFTH brown theme integration
- **Modern Angular 20**: Uses `@for` and `@if` control flow syntax
- **State**: Angular 20 Signals for reactive filtering

#### 2. Picking Interface Component (`picking-interface.component.ts`)
- **Purpose**: Real-time picking workflow with weight scale integration
- **Features**:
  - Live weight display with WebSocket readiness
  - Visual tolerance indicators with color-coded feedback
  - Progress tracking across multiple items
  - Lot number assignment and tracking
  - Scale controls (tare, calibrate, record)
- **Architecture**: Prepared for WebSocket weight updates
- **State**: Signal-based reactive weight monitoring

#### 3. Scale Management Component (`scale-management.component.ts`)
- **Purpose**: Multi-scale monitoring and configuration
- **Features**:
  - Real-time connection status for multiple scales
  - Scale calibration and testing capabilities
  - Hardware information display (COM ports, firmware, battery)
  - Workstation assignment and filtering
- **Multi-Scale**: Ready for 10+ concurrent workstation operations

### 🚧 In Progress
- **Rust Backend**: Axum web framework with Tiberius SQL Server driver
- **C# Bridge Service**: ScaleLibrary.dll integration for hardware communication
- **Database Integration**: TFCPILOT3 connection and API endpoints

### 📋 Next Phase
- **WebSocket Implementation**: Real-time weight updates (≤100ms)
- **Authentication**: LDAP + SQL Server integration
- **Production Deployment**: Docker containerization and deployment scripts

## Requirements

### Functional Requirements

**FR1**: The system shall automatically detect workstation scale configuration from existing `TFC_Weighup_Controllers` and `TFC_Weighup_WorkStations` database tables using workstation name resolution via CLIENTNAME/COMPUTERNAME environment variables

**FR2**: The system shall establish real-time communication with USB weight scales using ScaleLibrary.dll COM port protocol (9600 baud, "P" command polling every 400ms) through a C# bridge service

**FR3**: The system shall display real-time weight readings with ±0.001 KG precision in the Angular web interface matching NWFTH brown/amber theme

**FR4**: The system shall implement dual tolerance system: (1) ScaleLibrary.dll visual progress bar for operator guidance (green/red), and (2) INMAST.USER8/USER9 business tolerance validation for pick confirmation using per-ItemKey weight ranges

**FR5**: The system shall execute the proven 5-table atomic transaction pattern for partial picking operations, updating `PickedPartialQty` field in `cust_PartialPicked` table using proper primary keys (RunNo, RowNum, LineId) with live scale weight

**FR6**: The system shall support concurrent multi-user operations across 10+ workstations with session management and conflict prevention

**FR7**: The system shall provide WebSocket-based real-time weight updates to Angular frontend without requiring browser page refresh

**FR8**: The system shall maintain backward compatibility with existing `Cust_PartialRun` workflow (Status: NEW → PRINT progression) using correct PascalCase field names from SQL schema

**FR9**: The system shall verify scale configuration availability in TFCPILOT3 database and provide migration path from TFCLIVE if needed

**FR10**: The system shall query INMAST table for per-ItemKey tolerance values (USER8 min, USER9 max) to calculate acceptable weight ranges for business validation separate from ScaleLibrary.dll visual feedback

**FR11**: The system shall provide intuitive user workflow matching existing PartialPickingInKG.exe interface patterns to minimize training time

**FR12**: The system shall generate 4x4 thermal label print summary reports showing batch-level ingredient information in tabular format with product details, run numbers, and pagination matching existing PartialPickingInKG.exe print layouts

**FR13**: The system shall generate individual 4x4 thermal item labels for each picked ingredient containing ItemKey, weight, unit of measure, lot number, and barcode information for warehouse traceability

**FR14**: The system shall enable "Print" button only when all required ingredients in a run have been successfully picked and recorded in the 5-table transaction system

**FR15**: The system shall generate multiple labels based on picking frequency, with each individual pick operation creating one corresponding label for complete traceability

**FR16**: The system shall automatically detect USB weight scale connections via Windows Management Instrumentation (WMI) events and auto-register new scales in TFC_Weighup_Controllers and TFC_Weighup_WorkStations tables without manual configuration

**FR17**: The system shall support multiple concurrent weight scales with different capacities (high-capacity, medium-capacity, precision scales) accessible from single workstations, with intelligent scale selection recommendations based on ingredient weight requirements

**FR18**: The system shall provide real-time scale availability status and allow users to switch between connected scales during picking operations, with automatic failover suggestions when preferred scales become unavailable

### Non-Functional Requirements

**NFR1**: The system shall achieve 99.5% uptime during picking hours with automatic failover to existing PartialPickingInKG.exe if needed

**NFR2**: Weight reading response time shall be ≤100ms from scale to Angular UI display

**NFR3**: The system shall support 10+ concurrent workstations without performance degradation

**NFR4**: All weight scale communications shall use existing ScaleLibrary.dll without modifications to preserve proven hardware compatibility

**NFR5**: The system shall use TFCPILOT3 database unified architecture matching Mobile-Rust performance standards

**NFR6**: The system shall establish performance baselines for current PartialPickingInKG.exe operations (picks per hour, error rates) before deployment

**NFR7**: The system shall provide performance metrics dashboard showing efficiency improvements (picking speed, error rates, user satisfaction) compared to baseline

## User Interface Design Goals

### Overall UX Vision
Modern web-based partial picking interface that maintains familiar workflow patterns from existing PartialPickingInKG.exe while leveraging NWFTH brown/amber brand theme. The interface prioritizes real-time weight display, tolerance visual feedback, and touch-friendly controls for warehouse tablet use. Core user experience centers around "see ingredient → place on scale → confirm pick" workflow with immediate visual validation.

### Key Interaction Paradigms
- **Real-time Weight Display**: Large, prominent weight reading with color-coded status (green=within tolerance, red=outside range)
- **Progressive Ingredient List**: Step-by-step ingredient picking with clear progress indicators and remaining quantities
- **Touch-First Design**: 44px minimum touch targets optimized for warehouse tablets and gloved hands
- **Dual Weight Validation**: ScaleLibrary.dll progress bar for visual guidance + INMAST tolerance validation for business rules
- **One-Click Pick Confirmation**: Single action to confirm pick using live scale weight

### Core Screens and Views
- **Login Screen**: NWFTH branded authentication matching Mobile-Rust design
- **Run Selection Dashboard**: Available partial picking runs with run numbers and status
- **Partial Picking Interface**: Main workspace showing ingredient details, live weight, and pick confirmation
- **Weight Scale Display**: Real-time weight reading with tolerance visualization and target indicators
- **Pick Confirmation Modal**: Summary of picked weight, lot details, and final confirmation
- **Progress Overview**: Current run status with completed/remaining ingredients

### Accessibility: WCAG AA
Ensure WCAG AA compliance for warehouse accessibility requirements including high contrast ratios for the brown/amber theme, keyboard navigation support, and screen reader compatibility for critical weight and ingredient information.

### Branding
Exact replication of Mobile-Rust NWFTH brand standards:
- **Primary Colors**: Dark Coffee Brown (#523325) for headers and primary actions
- **Accent Colors**: Golden Amber (#F0B429) for highlights and focus states
- **Background**: Soft Cream (#F5F5DC) with warm brown shadows
- **Typography**: Inter font family with consistent weight hierarchy
- **Component Library**: shadcn/ui components with NWFTH custom styling classes

### Target Device and Platforms: Web Responsive
Web Responsive design optimized for multiple device types:
- **Primary**: Warehouse tablets (10-12 inch screens) with touch interfaces
- **Secondary**: Desktop workstations with mouse/keyboard input
- **PWA Support**: Progressive Web App capabilities for offline functionality and app-like installation
- **Cross-Browser**: Chrome, Edge, Safari compatibility for maximum workstation flexibility

## Technical Assumptions

### CRITICAL: System Boundaries and Non-Interactions

**PK App Scope (What We Build):**
- **Location**: `/PK/` folder - completely standalone application
- **Tables**: ONLY Cust_PartialRun, cust_PartialPicked, Cust_PartialLotPicked, Cust_PartialPalletLotPicked tables + shared LotMaster/LotTransaction updates
- **Technology**: Angular 20 + Rust + C# bridge service (NEW implementation)
- **Purpose**: Partial picking with weight scale integration ONLY

**Reference Systems (What We DON'T Touch):**
- **Webserver (PHP)**: Used for run creation only - we READ from Cust_PartialRun table (primary keys: RunNo, RowNum), don't modify
- **Mobile-Rust**: Bulk picking system - used as reference for patterns/workflows, NO direct interaction
- **Database Interaction**: PK app does NOT touch any Cust_Bulk* tables or Mobile-Rust code

**Shared Database Tables (Coordination Required):**
- **LotMaster**: Inventory updates (QtyCommitSales) - shared with all picking systems
- **LotTransaction**: Audit trail records - shared audit pattern compliance
- **TFCPILOT3**: Single database, multiple applications accessing different table sets

### Repository Structure: Standalone
PK app lives in `/PK/` folder as completely independent Angular-Rust application following Mobile-Rust structural patterns but with NO code dependencies or direct integrations.

### Service Architecture
**Standalone Web Application**: Angular + Rust + C# bridge service architecture inspired by Mobile-Rust patterns but implemented from scratch for partial picking requirements with weight scale hardware integration.

### Testing Requirements
**Full Testing Pyramid**: Unit testing for Rust backend services, integration testing for database transactions, E2E testing with Playwright for user workflows, and manual testing convenience methods for weight scale hardware validation. Critical focus on transaction integrity testing for 5-table partial picking workflow.

### Additional Technical Assumptions and Requests

**Database Configuration:**
- **Dual Database Dependencies**:
  - TFCLIVE: Required by ScaleLibrary.dll (hardcoded) for scale configuration
  - TFCPILOT3: Primary database for partial picking operations (configurable via .env)
  - INMAST table: ItemKey tolerance values (USER8/USER9) - determine database location
- **NO HARDCODED NAMES**: Application database name MUST be configurable via PRIMARY_DB environment variable, never hardcode TFCPILOT3 in code
- **SQL Server MCP Integration**: Use sqlserver MCP to verify actual database schemas and table structures during development
- **Schema Verification**: All table field names, data types, and primary keys must match actual SQL Server schema exactly (case-sensitive)
- **Scale Configuration**: ScaleLibrary.dll requires TFCLIVE access (cannot be changed)
- **Tolerance Integration**: INMAST.USER8/USER9 fields must be accessible for business validation
- **Environment Control**: All configurable database connections via .env files following Mobile-Rust patterns

**Technology Stack Decisions:**
- **Frontend**: Angular 20 + TypeScript + Modern CSS architecture with NWFTH component system
- **Backend**: Rust + Axum framework + Tiberius SQL Server driver (matching Mobile-Rust exactly)
- **Weight Scale Integration**: C# bridge service using ScaleLibrary.dll with HTTP/WebSocket API
- **Database**: Microsoft SQL Server TFCPILOT3 unified architecture
- **Authentication**: SQL Server tbl.user + LDAP integration (Mobile-Rust pattern)

**Performance and Scalability:**
- **Connection Pooling**: Rust backend database connection pooling for concurrent workstation support
- **WebSocket Architecture**: Real-time weight updates using Axum WebSocket handlers
- **Caching Strategy**: In-memory caching for workstation configuration and scale settings
- **Session Management**: JWT tokens with workstation-specific session tracking

**Development and Deployment:**
- **Build System**: npm run dev:all for unified frontend/backend development (Mobile-Rust pattern)
- **Environment Configuration**: .env files for database connections, LDAP settings, scale configurations
- **Schema Verification Tools**: Use SQL Server MCP during development to verify field names, types, and constraints match actual database
- **Code Standards**: cargo clippy for Rust, Angular ESLint for TypeScript, consistent with Mobile-Rust
- **Version Control**: Professional commit messages without AI signatures (Mobile-Rust standard)

**Security and Compliance:**
- **Network Security**: Local C# bridge service HTTP API (localhost only) for scale communication
- **Database Security**: Parameterized queries with Tiberius driver, same patterns as Mobile-Rust
- **User Authentication**: Existing LDAP integration with SQL Server user management
- **Scale Data Validation**: Input sanitization for all weight readings and tolerance values

**Hardware Integration:**
- **Multi-Scale Support**: C# bridge service handles multiple COM port configurations (COM1, COM2, COM3, COM4, COM5) simultaneously across different scale types and capacities
- **USB Auto-Detection**: Automatic detection and registration of newly connected weight scales using Windows WMI events
- **Dynamic Scale Registration**: Plug-and-play scale setup with automatic database insertion into TFC_Weighup_Controllers and TFC_Weighup_WorkStations tables
- **COM Port Management**: C# bridge service handles SerialPort connections via ScaleLibrary.dll with automatic COM port discovery
- **Auto-Configuration**: Workstation detection via CLIENTNAME/COMPUTERNAME environment variables with automatic scale-to-workstation mapping
- **Scale Protocol**: "P" command polling every 400ms for real-time weight readings across all connected scales
- **Scale Selection Logic**: Users can select appropriate scale type based on ingredient weight requirements (high-capacity, medium-capacity, precision scales)
- **Error Recovery**: Automatic reconnection handling for scale communication failures with scale failover capabilities

## Epic List

**Epic 1: Foundation & Weight Scale Integration**
Establish Angular-Rust project foundation with core weight scale connectivity, following Mobile-Rust proven patterns while delivering functional single-user partial picking with live weight integration.

**Epic 2: Core Partial Picking Workflow**
Implement complete 5-table transaction pattern for partial picking operations with database integration, user authentication, print label generation system, and NWFTH-themed interface matching existing PartialPickingInKG.exe workflow.

**Epic 3: Multi-User Production Operations**
Enable concurrent multi-workstation support with session management, real-time WebSocket updates, advanced error handling, and production-grade performance monitoring.

**Epic 4: Performance Optimization & Enterprise Features**
Advanced analytics, mobile PWA optimization, performance metrics dashboard, and complete integration testing with existing warehouse management workflows.

## Epic 1: Foundation & Weight Scale Integration

**Epic Goal:** Establish core technical foundation by replicating Mobile-Rust project structure and proving weight scale integration concept with functional Angular web interface and C# bridge service connectivity.

### Story 1.1: Project Foundation Setup
As a developer,
I want to create PK project structure based on Mobile-Rust template,
so that we have consistent development environment and proven architecture patterns.

**Acceptance Criteria:**
1. Project structure mirrors Mobile-Rust with frontend/, backend/, docs/ directories
2. Angular 20 + TypeScript frontend configured with NWFTH brown/amber theme
3. Rust + Axum backend configured with Tiberius SQL Server driver
4. Environment configuration (.env) setup for TFCPILOT3 database connection
5. npm run dev:all command starts both frontend and backend successfully
6. Basic health check endpoints return success responses

### Story 1.2: Database Scale Configuration Migration
As a system administrator,
I want scale configuration data available in TFCPILOT3 database,
so that the new system can auto-detect workstation scale settings.

**Acceptance Criteria:**
1. TFC_Weighup_Controllers table exists in TFCPILOT3 with all workstation data
2. TFC_Weighup_WorkStations table exists in TFCPILOT3 with controller mappings
3. Workstation auto-detection works via CLIENTNAME/COMPUTERNAME resolution
4. Database queries return correct COM port, baud rate, and parity settings
5. Migration script documented for production deployment

### Story 1.3: C# Weight Scale Bridge Service
As a weight scale operator,
I want real-time weight readings from USB scales accessible to web application,
so that I can see live weight data in the browser interface.

**Acceptance Criteria:**
1. C# console application reads ScaleLibrary.dll and exposes HTTP API
2. Bridge service auto-configures COM port settings from TFCPILOT3 database
3. GET /weight endpoint returns current weight in JSON format with ±0.001 KG precision
4. POST /target-weight endpoint sets target weight and tolerance values
5. Service handles COM port reconnection and error recovery automatically
6. Bridge service runs as background process on workstation startup

### Story 1.4: Rust Backend Weight Integration
As a backend developer,
I want Rust service to communicate with C# bridge service,
so that weight data is available to Angular frontend via web APIs.

**Acceptance Criteria:**
1. Rust HTTP client connects to local C# bridge service (localhost:5000)
2. GET /api/weight endpoint fetches current weight from bridge service
3. WebSocket endpoint /api/weight-stream provides real-time weight updates
4. Weight service handles bridge service unavailable scenarios gracefully
5. Error responses include clear messaging for troubleshooting
6. Integration tests validate weight data flow from scale to Rust API

### Story 1.5: Angular Weight Display Interface
As a warehouse operator,
I want to see live weight readings in web browser with NWFTH styling,
so that I can monitor scale weight in real-time during picking operations.

**Acceptance Criteria:**
1. Angular component displays current weight with large, readable font (24px+)
2. Weight updates every 400ms via WebSocket connection without page refresh
3. NWFTH brown/amber theme applied with brand colors and styling
4. Weight status shows green (within tolerance) or red (outside tolerance)
5. Target weight and tolerance ranges displayed alongside current weight
6. Connection status indicator shows scale communication health
7. Interface responsive for both desktop and tablet viewing

### Story 1.6: USB Auto-Detection and Multi-Scale Support
As a warehouse IT administrator,
I want weight scales to be automatically detected and configured when plugged into workstations,
so that there is zero manual setup required and users can work with multiple scale types.

**Acceptance Criteria:**
1. C# bridge service detects USB scale connections via Windows WMI events automatically
2. System tests new COM ports with ScaleLibrary.dll to identify valid weight scales
3. Auto-generates ControllerID and inserts configuration into TFC_Weighup_Controllers table
4. Updates TFC_Weighup_WorkStations table with current COMPUTERNAME to ControllerID mapping
5. Angular frontend receives WebSocket notification when new scales become available
6. Users can select from multiple available scales based on capacity requirements (high, medium, precision)
7. System provides scale recommendations based on ingredient weight ranges
8. Real-time scale availability status displayed with connection health indicators
9. Plug-and-play operation requires zero manual database configuration or COM port setup

## Epic 2: Core Partial Picking Workflow

**Epic Goal:** Implement complete partial picking business logic with 5-table transaction pattern, user authentication, and workflow matching existing PartialPickingInKG.exe functionality.

### Story 2.1: User Authentication System
As a warehouse worker,
I want to log in with my existing credentials,
so that I can access partial picking operations with proper user tracking.

**Acceptance Criteria:**
1. Login page matches NWFTH branding and Mobile-Rust design patterns
2. Authentication supports both SQL Server user table and LDAP integration
3. JWT token generation includes user ID, display name, and workstation info
4. Session management tracks user activity and automatic timeout
5. User information displayed in header with logout functionality
6. Failed login attempts logged for security monitoring

### Story 2.2: Partial Run Selection Dashboard
As a warehouse operator,
I want to see available partial picking runs,
so that I can select and begin picking operations.

**Acceptance Criteria:**
1. Dashboard displays Cust_PartialRun records with Status = 'NEW' ordered by RunNo, RowNum (PascalCase fields from SQL schema)
2. Run information shows Run No, FG Item Key, Batch No, Production Date
3. Run selection filters by current workstation or user assignment
4. Search functionality allows finding runs by number or item key
5. Run status indicators show progress (pending, in-progress, completed)
6. Click to select run navigates to partial picking interface

### Story 2.3: Partial Picking Interface Core
As a warehouse operator,
I want to pick partial quantities using live weight data,
so that I can accurately fulfill partial picking requirements.

**Acceptance Criteria:**
1. Interface shows current ingredient details (Item Key, Lot No, Bin No)
2. Target quantity displays ToPickedPartialQty from Cust_PartialRun table using correct field casing
3. Live weight reading integrates with dual tolerance validation: ScaleLibrary.dll visual feedback + INMAST business rules
4. Pick confirmation button enabled only when weight is within INMAST business tolerance (USER8/USER9 per ItemKey)
5. Progress indicator shows completed vs remaining ingredients in run
6. Manual ingredient navigation allows skipping to specific items
7. Interface matches existing PartialPickingInKG.exe workflow patterns
8. Allergen indicators properly displayed (e.g., "D" for dairy)

### Story 2.4: Database Transaction Processing
As a system architect,
I want atomic 5-table transaction processing for partial pick confirmations,
so that database consistency is maintained across all partial picking operations.

**Acceptance Criteria:**
1. Transaction updates cust_PartialPicked with PickedPartialQty using primary keys (RunNo, RowNum, LineId)
2. Cust_PartialLotPicked record created with LotTranNo as primary key for lot allocation tracking
3. LotMaster QtyCommitSales updated for inventory commitment
4. LotTransaction audit record created with BT document number generation
5. Cust_PartialPalletLotPicked record created for pallet traceability using proper schema fields
6. Transaction rollback occurs if any step fails with clear error messaging
7. Bangkok timezone (UTC+7) used for all timestamp operations
8. User tracking consistent across all tables (PHUVIS format)

### Story 2.5: Print Label Generation System
As a warehouse operator,
I want to print summary reports and individual item labels after completing partial picking,
so that I have proper documentation and traceability for picked ingredients.

**Acceptance Criteria:**
1. "Print" button becomes available when user has picked all required items in a run
2. Print Summary Report generates 4x4 labels with batch overview showing:
   - Product info (TF44122B, Battermix), Run number, Batch number, Date/Time
   - Table of all picked ingredients with ItemKey, BIN, Lot-No, QTY, UM (Unit of Measure)
   - Page numbering (Page 1 of 4 format matching printsum.png layout)
3. Individual Item Labels generate 4x4 labels for each picked ingredient showing:
   - ItemKey (e.g., INFULM01), Weight (e.g., 10.00), Unit (KG)
   - Barcode number (e.g., 850857), Lot number with timestamp
   - Formatted layout matching print1.png specifications
4. System prints multiple labels based on pick frequency (10 picks = 10 labels)
5. Label generation uses data from cust_PartialPicked (ItemKey, PickedPartialQty, Unit) and Cust_PartialLotPicked (LotNo) tables
6. Print functionality integrates with workstation printers configured in system

### Story 2.6: Run Completion Workflow
As a warehouse operator,
I want clear indication when partial picking run is complete,
so that I know all ingredients have been processed successfully.

**Acceptance Criteria:**
1. Run status automatically changes from NEW to PRINT when all ingredients completed
2. Completion confirmation screen shows summary of all picked quantities
3. User can return to dashboard to select next available run
4. Completed run appears in audit trail with completion timestamp
5. System validates all required ingredients picked before marking complete

## Epic 3: Multi-User Production Operations

**Epic Goal:** Enable concurrent multi-workstation support with session management, real-time coordination, and production-grade error handling for full warehouse deployment.

### Story 3.1: Concurrent Workstation Session Management
As a system administrator,
I want multiple workstations to operate independently without conflicts,
so that warehouse operations can scale to all required picking stations.

**Acceptance Criteria:**
1. Each workstation maintains independent scale configuration and session
2. Database connections use connection pooling for concurrent user support
3. Session tracking prevents same run assignment to multiple users
4. Workstation-specific weight scale bridge services operate independently
5. Real-time session monitoring shows active users and workstation status
6. Automatic session cleanup when users disconnect or log out

### Story 3.2: Real-Time WebSocket Architecture
As a warehouse operator,
I want immediate updates when system state changes,
so that I see current information without manual page refresh.

**Acceptance Criteria:**
1. WebSocket connections provide real-time weight updates to Angular frontend
2. Run assignment changes broadcast to affected workstations immediately
3. Scale connection status updates propagate to user interface in real-time
4. System notifications (errors, warnings) delivered via WebSocket messaging
5. Connection recovery handles network interruptions automatically
6. WebSocket performance supports 10+ concurrent connections without degradation

### Story 3.3: Advanced Error Handling and Recovery
As a warehouse supervisor,
I want robust error handling that keeps operations running,
so that temporary issues don't disrupt critical picking workflows.

**Acceptance Criteria:**
1. Scale communication failures automatically retry with exponential backoff
2. Database connection errors provide clear user messaging and recovery options
3. Transaction failures rollback cleanly with detailed error reporting
4. Network connectivity issues handled gracefully with offline capability
5. Bridge service restart procedures documented and automated
6. Error logs provide sufficient detail for troubleshooting and support

### Story 3.4: Production Monitoring Dashboard
As a warehouse supervisor,
I want visibility into system performance and user activity,
so that I can monitor operations and identify issues proactively.

**Acceptance Criteria:**
1. Admin dashboard shows active workstations and current user sessions
2. Real-time metrics display picking rates, error counts, and system health
3. Scale connectivity status monitoring for all configured workstations
4. Performance alerts for slow database queries or high error rates
5. User activity logging shows picking history and efficiency metrics
6. System resource monitoring (CPU, memory, database connections)

## Epic 4: Performance Optimization & Enterprise Features

**Epic Goal:** Deliver enterprise-grade system with advanced analytics, mobile optimization, and comprehensive integration testing for long-term operational excellence.

### Story 4.1: Performance Metrics and Analytics
As a warehouse manager,
I want detailed analytics on picking efficiency and error rates,
so that I can measure system improvements and identify optimization opportunities.

**Acceptance Criteria:**
1. Baseline performance metrics captured for comparison with legacy system
2. Real-time dashboard shows picks per hour, error rates, and user efficiency
3. Historical reporting compares performance before/after system implementation
4. Automated alerts when performance degrades below acceptable thresholds
5. Export capabilities for management reporting and analysis
6. Integration with existing warehouse management reporting systems

### Story 4.2: Mobile PWA Optimization
As a warehouse operator using tablets,
I want optimized mobile experience with offline capabilities,
so that I can work effectively on mobile devices even with network issues.

**Acceptance Criteria:**
1. Progressive Web App (PWA) installation on tablets and mobile devices
2. Touch-optimized interface with 44px minimum touch targets
3. Offline capability maintains basic functionality during network outages
4. App-like experience with proper splash screen and navigation
5. Performance optimization for tablet hardware and mobile networks
6. Accessibility compliance (WCAG AA) for mobile and desktop usage

### Story 4.3: Comprehensive Integration Testing
As a quality assurance engineer,
I want complete test coverage across all system components,
so that production deployment is reliable and regression-free.

**Acceptance Criteria:**
1. End-to-end Playwright tests cover complete picking workflows
2. Integration tests validate weight scale hardware with actual devices
3. Load testing confirms 10+ concurrent user performance requirements
4. Database transaction testing validates ACID compliance under stress
5. Security testing covers authentication, authorization, and data protection
6. Regression test suite runs automatically with each code deployment

### Story 4.4: Production Deployment and Migration
As a system administrator,
I want smooth production deployment with minimal disruption,
so that warehouse operations continue uninterrupted during system transition.

**Acceptance Criteria:**
1. Deployment automation scripts handle database migration and service installation
2. Rollback procedures documented and tested for quick recovery if needed
3. Parallel operation capability allows gradual transition from legacy system
4. User training materials and documentation complete for all system features
5. Production monitoring and alerting configured before go-live
6. Support procedures established for incident response and troubleshooting

## Actual Transaction Analysis Documentation

Based on comprehensive analysis of real partial picking operations (Run 6000028 and Run 600015), the following transaction pattern has been confirmed:

### 5-Table Atomic Transaction Pattern

**STEP 1: cust_PartialPicked UPDATE**
```sql
UPDATE cust_PartialPicked
SET PickedPartialQty = @weight_from_scale,      -- Uses this field, NOT PickedPartialQtyKG!
    PickingDate = @timestamp,
    ItemBatchStatus = 'Allocated',
    ModifiedBy = @user_id,
    ModifiedDate = @timestamp
WHERE RunNo = @run_no AND RowNum = @row_num AND LineId = @line_id
```

**STEP 2: Cust_PartialLotPicked INSERT**
```sql
INSERT INTO Cust_PartialLotPicked (
    RunNo, RowNum, BatchNo, LineId, LotNo, ItemKey, LocationKey,
    DateReceived, DateExpiry, TransactionType, QtyReceived,
    AllocLotQty, QtyUsed, BinNo, User11, LotStatus, RecUserid, RecDate
) VALUES (
    @run_no, @row_num, @batch_no, @line_id, @selected_lot, @item_key, @location,
    @timestamp, @lot_expiry, 5, @picked_qty,
    @picked_qty, @picked_qty, @source_bin, 1, 'Allocated', @user_id, @timestamp
)
```

**STEP 3: LotMaster UPDATE**
```sql
UPDATE LotMaster
SET QtyCommitSales = QtyCommitSales + @picked_qty
WHERE LotNo = @selected_lot AND ItemKey = @item_key AND BinNo = @source_bin
```

**STEP 4: LotTransaction INSERT**
```sql
INSERT INTO LotTransaction (
    LotNo, ItemKey, LocationKey, DateExpiry, TransactionType,
    ReceiptDocNo, ReceiptDocLineNo, IssueDocNo, IssueDocLineNo,
    IssueDate, QtyIssued, RecUserid, RecDate, BinNo, User5
) VALUES (
    @selected_lot, @item_key, @location, @lot_expiry, 5,
    @bt_document, 1, @batch_no, 1,
    @timestamp, @picked_qty, @user_id, @timestamp, @source_bin, 'Picking Customization'
)
```

**STEP 5: Cust_PartialPalletLotPicked INSERT**
```sql
INSERT INTO Cust_PartialPalletLotPicked (
    RunNo, RowNum, BatchNo, LineId, PalletID, RecUserid, RecDate
) VALUES (
    @run_no, @row_num, @batch_no, @line_id, @pallet_id, @user_id, @timestamp
)
```

### Critical Implementation Notes

1. **Field Usage**: Always use `PickedPartialQty` in cust_PartialPicked with composite primary key (RunNo, RowNum, LineId), never use `PickedPartialQtyKG`
2. **Lot Selection**: System uses FEFO (First Expired, First Out) logic
3. **Document Generation**: Auto-generates BT document numbers for audit trail
4. **Allergen Handling**: Preserve allergen codes (e.g., "D" for dairy) in Allergen field
5. **User Tracking**: Consistent user ID format across all tables
6. **TransactionType**: Always use 5 for partial picking operations
7. **Timing**: Individual pick timestamps with batch completion processing

### Validated Database Schema

**Key Columns That Are Updated:**
- cust_PartialPicked: `PickedPartialQty` (decimal 18,6), `PickingDate`, `ItemBatchStatus`, `ModifiedBy`, `ModifiedDate` with composite primary key (RunNo, RowNum, LineId)
- Cust_PartialLotPicked: LotTranNo (bigint identity) primary key, all fields per verified SQL schema
- LotMaster: `QtyCommitSales` (decimal 18,6) incremented with exact precision
- LotTransaction: Complete audit record with proper TranType and BT document reference
- Cust_PartialPalletLotPicked: Pallet tracking with verified schema field names and types

**Key Columns That Remain NULL:**
- cust_PartialPicked: `ToPickedPartialQtyKG`, `PickedPartialQtyKG` (legacy unused fields - use PickedPartialQty with proper decimal 18,6 precision)
- Most User1-User12 fields across tables (except specific flags like User11=1)

This transaction analysis ensures 100% compatibility with the existing partial picking system and provides the exact specifications needed for the Angular-Rust implementation.

## Next Steps

### UX Expert Prompt
Create Angular 20 component library implementing NWFTH brown/amber theme with real-time weight display interface, following shadcn/ui patterns and ensuring WCAG AA compliance for warehouse tablet optimization.

### Architect Prompt
Implement Angular-Rust partial picking system with C# bridge service architecture, following Mobile-Rust patterns and exact 5-table transaction specifications documented in this PRD for ScaleLibrary.dll weight scale integration.