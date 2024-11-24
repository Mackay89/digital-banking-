// logging.js

/**
 * Centralized Logging Service
 */

const fs = require('fs');
const path = require('path');

// Log file path
const LOG_FILE_PATH = path.join(__dirname, 'logs', 'app.log');

/**
 * Logs a message to the log file
 * @param {string} message - The message to log
 * @param {string} level - The log level (info, error, etc.)
 */
const logMessage = (message, level = 'info') => {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} [${level.toUpperCase()}]: ${message}\n`;
  
  // Write log entry to log file
  fs.appendFileSync(LOG_FILE_PATH, logEntry, 'utf8');
};

/**
 * Logs error message and stack trace
 * @param {Error} error - The error object to log
 */
const logError = (error) => {
  const errorMessage = `${error.message}\n${error.stack}`;
  logMessage(errorMessage, 'error');
};

module.exports = {
  logMessage,
  logError,
};

