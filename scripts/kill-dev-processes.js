#!/usr/bin/env node

/**
 * Cross-platform script to stop PK development services.
 * Frees up the dev ports used by Angular, Rust, and the bridge service.
 */

const { execSync } = require('child_process');

const PORTS = [6060, 6061, 6062, 7070, 5000, 5001, 5002, 5003, 5004, 5005];
const isWindows = process.platform === 'win32';

console.log('🔄 Stopping PK development processes...');
console.log('🔌 Target ports:', PORTS.join(', '));

function killPortOnWindows(port) {
  try {
    const output = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' });
    const pids = new Set();

    output
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean)
      .forEach(line => {
        const parts = line.split(/\s+/);
        const pid = parts[parts.length - 1];
        if (/^\d+$/.test(pid)) {
          pids.add(pid);
        }
      });

    if (pids.size === 0) {
      return false;
    }

    pids.forEach(pid => {
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' });
        console.log(`   • Killed PID ${pid} on port ${port}`);
      } catch (error) {
        const status = typeof error.status === 'number' ? error.status : 'unknown';
        console.warn(`   • Failed to kill PID ${pid} (status ${status})`);
      }
    });

    return true;
  } catch (error) {
    // findstr returns exit code 1 when no matches are found - treat as benign
    if (error.status !== 1) {
      console.warn(`   • Unable to inspect port ${port}: ${error.message}`);
    }
    return false;
  }
}

function killPortOnUnix(port) {
  try {
    const output = execSync(`lsof -ti tcp:${port}`, { encoding: 'utf8' });
    const pids = new Set(
      output
        .split(/\r?\n/)
        .map(pid => pid.trim())
        .filter(Boolean),
    );

    if (pids.size === 0) {
      return false;
    }

    pids.forEach(pid => {
      try {
        execSync(`kill -9 ${pid}`, { stdio: 'ignore' });
        console.log(`   • Killed PID ${pid} on port ${port}`);
      } catch (error) {
        console.warn(`   • Failed to kill PID ${pid}: ${error.message}`);
      }
    });

    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      // lsof not available - fall back to fuser if present
      try {
        execSync(`fuser -k ${port}/tcp`, { stdio: 'ignore' });
        console.log(`   • Killed processes on port ${port} via fuser`);
        return true;
      } catch (fallbackError) {
        if (fallbackError.status !== 1) {
          console.warn(`   • Unable to kill port ${port}: ${fallbackError.message}`);
        }
        return false;
      }
    }

    if (error.status !== 1) {
      console.warn(`   • Unable to inspect port ${port}: ${error.message}`);
    }
    return false;
  }
}

let killedAny = false;
PORTS.forEach(port => {
  const killed = isWindows ? killPortOnWindows(port) : killPortOnUnix(port);
  if (killed) {
    killedAny = true;
  }
});

if (killedAny) {
  console.log('✅ Development ports are free.');
} else {
  console.log('✅ No PK development processes detected.');
}

console.log('🚀 Ready to start fresh development services.');
