const fs = require('fs');
const path = require('path');

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const envMap = {};
  const content = fs.readFileSync(filePath, 'utf8');

  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      return;
    }

    const [key, ...valueParts] = trimmed.split('=');
    if (!key || valueParts.length === 0) {
      return;
    }

    let value = valueParts.join('=').trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    envMap[key.trim()] = value;
  });

  return envMap;
}

function toInt(value, fallback) {
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

const rootEnvPath = path.resolve(__dirname, '../../.env');
const rootEnv = parseEnvFile(rootEnvPath);

const backendProtocol = (process.env.BACKEND_PROTOCOL || rootEnv.BACKEND_PROTOCOL || 'http').replace(/:$/, '');
const backendHost = process.env.BACKEND_HOST || rootEnv.BACKEND_HOST || '127.0.0.1';
const backendPort = toInt(process.env.BACKEND_PORT || rootEnv.BACKEND_PORT, 7070);

const explicitBackendUrl = process.env.PK_BACKEND_URL || rootEnv.PK_BACKEND_URL;

const target = explicitBackendUrl || `${backendProtocol}://${backendHost}:${backendPort}`;

module.exports = [
  {
    context: ['/api'],
    target,
    secure: false,
    changeOrigin: true,
    logLevel: 'info',
    ws: true,
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('X-Forwarded-Host', proxyReq.getHeader('host'));
    },
  },
];
