#!/bin/bash

# PK System - Kill Development Processes Script
# Safely kills all frontend/backend development processes and frees up ports

echo "🔄 Stopping PK development processes..."

# Kill processes by pattern (excluding node itself to avoid killing the parent process)
echo "📦 Killing Angular processes..."
pkill -f "ng serve" 2>/dev/null || true
pkill -f "webpack" 2>/dev/null || true

echo "🦀 Killing Rust processes..."
pkill -f "cargo run" 2>/dev/null || true
pkill -f "target/debug" 2>/dev/null || true

echo "🔷 Killing .NET processes..."
pkill -f "dotnet run" 2>/dev/null || true
pkill -f "bridge-service" 2>/dev/null || true

# Kill processes on specific ports
echo "🔌 Freeing up development ports..."
fuser -k 6060/tcp 2>/dev/null || true  # Frontend default port
fuser -k 6061/tcp 2>/dev/null || true  # Frontend alternate port
fuser -k 6062/tcp 2>/dev/null || true  # Frontend alternate port
fuser -k 7070/tcp 2>/dev/null || true  # Backend port
fuser -k 5000/tcp 2>/dev/null || true  # Bridge service base port
fuser -k 5001/tcp 2>/dev/null || true  # Bridge service scale 1
fuser -k 5002/tcp 2>/dev/null || true  # Bridge service scale 2
fuser -k 5003/tcp 2>/dev/null || true  # Bridge service scale 3
fuser -k 5004/tcp 2>/dev/null || true  # Bridge service scale 4
fuser -k 5005/tcp 2>/dev/null || true  # Bridge service scale 5

# Wait a moment for processes to fully terminate
sleep 2

# Check if any processes are still running
echo "🔍 Checking for remaining processes..."
ANGULAR_PROCS=$(pgrep -f "ng serve" | wc -l)
RUST_PROCS=$(pgrep -f "cargo run" | wc -l)
DOTNET_PROCS=$(pgrep -f "dotnet run" | wc -l)

if [ $ANGULAR_PROCS -eq 0 ] && [ $RUST_PROCS -eq 0 ] && [ $DOTNET_PROCS -eq 0 ]; then
    echo "✅ All development processes stopped successfully"
else
    echo "⚠️  Some processes may still be running:"
    [ $ANGULAR_PROCS -gt 0 ] && echo "   - Angular processes: $ANGULAR_PROCS"
    [ $RUST_PROCS -gt 0 ] && echo "   - Rust processes: $RUST_PROCS"
    [ $DOTNET_PROCS -gt 0 ] && echo "   - .NET processes: $DOTNET_PROCS"
fi

echo "🚀 Ready to start fresh development services"