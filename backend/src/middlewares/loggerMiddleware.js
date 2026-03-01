const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../../logs/access.log');

// Ensure log directory exists
const logDir = path.dirname(logFilePath);
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${req.method} ${req.url}\n`;

    console.log(`[${timestamp}] ${req.method} ${req.url}`);

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) console.error('Failed to write to access log:', err);
    });

    // Demonstrate passing data to next middleware route handlers
    req.requestTime = timestamp;

    // Pass control to the next middleware or route handler
    next();
};

module.exports = loggerMiddleware;
