#!/usr/bin/env node

/**
 * Lightweight replacement for `concurrently` that orchestrates PK dev services.
 *   - Spawns frontend, backend, and bridge scripts in parallel
 *   - Mirrors stdio for each subprocess
 *   - On failure, tears down the remaining services to avoid orphaned processes
 *   - Handles SIGINT/SIGTERM so Ctrl+C stops everything cleanly
 */

const { spawn } = require('child_process');
const path = require('path');

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const services = [
  { name: 'frontend', args: ['run', 'dev:frontend'] },
  { name: 'backend', args: ['run', 'dev:backend'] },
  { name: 'bridge', args: ['run', 'dev:bridge'] },
];

const spawned = new Map();
let shuttingDown = false;

function spawnService(service) {
  const child = spawn(npmCmd, service.args, {
    cwd: process.cwd(),
    stdio: 'inherit',
    env: process.env,
  });

  spawned.set(service.name, child);

  child.once('exit', (code, signal) => {
    spawned.delete(service.name);

    if (shuttingDown) {
      return;
    }

    if (code === 0) {
      // Service exited cleanly; if all services are done, exit overall.
      if (spawned.size === 0) {
        process.exit(0);
      }
      return;
    }

    console.error(`\n❌ ${service.name} exited with code ${code}${signal ? ` (signal ${signal})` : ''}`);
    shutdown(code ?? 1);
  });

  child.once('error', (err) => {
    console.error(`\n❌ Failed to start ${service.name}:`, err.message);
    shutdown(1);
  });
}

function shutdown(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;

  for (const [name, child] of spawned.entries()) {
    if (child.exitCode == null) {
      child.kill('SIGTERM');
    }
  }

  // Give services time to exit gracefully before forcing
  setTimeout(() => {
    for (const [, child] of spawned.entries()) {
      if (child.exitCode == null) {
        child.kill('SIGKILL');
      }
    }
    process.exit(code);
  }, 3000).unref();
}

process.on('SIGINT', () => {
  console.log('\n🛑 Caught SIGINT - stopping dev services...');
  shutdown(130);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Caught SIGTERM - stopping dev services...');
  shutdown(143);
});

process.on('uncaughtException', (err) => {
  console.error('\n❌ Uncaught exception in dev orchestrator:', err);
  shutdown(1);
});

console.log('🚀 Starting PK dev services (frontend, backend, bridge)...');
services.forEach(spawnService);
