export const environment = {
  production: true,
  apiUrl: 'http://localhost:7070/api',

  // Database Configuration
  primaryDatabase: 'TFCPILOT3',
  scaleDatabase: 'TFCLIVE',

  // Service Ports
  frontendPort: 6060,
  backendPort: 7070,
  bridgeServicePort: 5000,

  // Authentication Configuration
  jwtTokenKey: 'pk_auth_token',
  sessionTimeout: 30 * 60 * 1000, // 30 minutes in milliseconds

  // Hardware Configuration
  defaultScaleBaudRate: 9600,
  weightPollingInterval: 400, // milliseconds
  websocketMaxResponseTime: 100, // milliseconds

  // Feature Flags
  features: {
    multiScaleSupport: true,
    autoScaleDetection: true,
    sessionTimeout: true,
    connectionMonitoring: true,
    accessibility: true,
    animations: true
  },

  // Logging Configuration
  logging: {
    level: 'warn',
    enableConsoleLog: false,
    enableApiLog: false
  },

  // UI Configuration
  ui: {
    theme: 'nwfth-brown',
    animationsEnabled: true,
    touchOptimized: true,
    minTouchTargetSize: 44 // pixels
  }
};