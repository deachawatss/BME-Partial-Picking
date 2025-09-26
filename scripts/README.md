# PK Development Scripts

Enhanced development workflow scripts for the PK (Partial Picking System) that properly manage process lifecycle and port cleanup.

## Scripts Overview

### Primary Commands

#### `npm run dev:all`
**Main development command** - Automatically cleans existing processes and starts all services fresh.

**Process Flow:**
1. Runs `dev:clean` to kill existing processes
2. Starts all three services concurrently:
   - Angular frontend on `:6060`
   - Rust backend on `:7070`
   - C# bridge service on `:5000`
3. Hands off to `scripts/run-dev-services.js`, which monitors exits and stops the remaining services if any one fails

#### `npm run dev:clean` / `npm run dev:stop`
**Process cleanup command** - Safely kills all development processes and frees ports.

**What it does:**
- Kills Angular (`ng serve`) processes
- Kills Rust (`cargo run`) processes
- Kills .NET (`dotnet run`) processes
- Frees ports: 5000-5005, 6060-6062, 7070
- **Preserves Node.js** processes to avoid killing parent npm process
- Provides detailed feedback on cleanup status

### Individual Service Commands

- `npm run dev:frontend` - Angular dev server only
- `npm run dev:backend` - Rust backend server only
- `npm run dev:bridge` - C# bridge service only

## Key Features

### Safe Process Management
- **Pattern-based killing**: Targets specific process patterns, not broad process types
- **Node.js preservation**: Never kills Node.js processes to avoid breaking npm
- **Port cleanup**: Systematically frees all development ports
- **Status reporting**: Clear feedback on what was cleaned up

### Port Management
Automatically manages these ports:
- **6060**: Primary Angular frontend
- **6061-6062**: Angular alternate ports
- **7070**: Rust backend API
- **5000**: C# bridge service base
- **5001-5005**: Individual scale bridge services

### Concurrency Features
- **Parallel startup**: All services start simultaneously via the Node orchestrator
- **Failure handling**: If any service exits non-zero, the orchestrator sends `SIGTERM` to the rest and escalates to `SIGKILL` after a grace period
- **Process isolation**: Each service runs independently with mirrored console output

## Usage Examples

### Fresh Development Start
```bash
npm run dev:all
```
Output:
```
🔄 Stopping PK development processes...
✅ All development processes stopped successfully
🚀 Ready to start fresh development services
🚀 Starting PK dev services (frontend, backend, bridge)...
...frontend/ng serve logs...
...backend cargo logs...
...bridge dotnet logs...
```

### Emergency Stop
```bash
npm run dev:stop
```

### Individual Service Development
```bash
# Work on frontend only
npm run dev:frontend

# Work on backend only
npm run dev:backend

# Work on bridge service only
npm run dev:bridge
```

## Troubleshooting

### If Ports Are Still Busy
The scripts automatically handle port cleanup, but if you encounter issues:

```bash
# Manual port cleanup
npm run dev:clean

# Check what's using ports
netstat -tulpn | grep :6060
netstat -tulpn | grep :7070
netstat -tulpn | grep :5000
```

### If Processes Won't Die
```bash
# Force kill by pattern
pkill -9 -f "ng serve"
pkill -9 -f "cargo run"
pkill -9 -f "dotnet run"

# Force kill by port
fuser -k 6060/tcp
fuser -k 7070/tcp
fuser -k 5000/tcp
```

### Service-Specific Issues

**Angular (Frontend)**
- Builds automatically on file changes
- Accessible at `http://localhost:6060`
- Watch for compilation errors in terminal

**Rust (Backend)**
- First run downloads/compiles dependencies (takes time)
- Accessible at `http://localhost:7070`
- Check `cargo --version` if compilation fails

**C# (.NET Bridge)**
- Requires .NET 8+ installed
- Accessible at `http://localhost:5000`
- Check `dotnet --version` if startup fails

## Architecture Benefits

### Development Workflow
- **One command**: `npm run dev:all` handles everything
- **Clean startup**: No leftover processes or port conflicts
- **Concurrent development**: All services running simultaneously
- **Fast iteration**: File watching and auto-reload enabled

### Production Readiness
- **Service independence**: Each service can be deployed separately
- **Port standardization**: Consistent port usage across environments
- **Process management**: Clean process lifecycle handling
- **Error handling**: Graceful failure management

### Team Collaboration
- **Standardized commands**: Same workflow for all developers
- **Clear documentation**: Self-documenting script output
- **Consistent environment**: Eliminates "works on my machine" issues
- **Easy onboarding**: Single command gets entire system running
