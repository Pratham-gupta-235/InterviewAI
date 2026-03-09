const express = require('express');
const cors = require('cors');

const path = require('path');
const fs = require('fs');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const interviewRoutes = require('./routes/interview.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware); // Custom Application-level middleware

// Serve Static Files (Vite Frontend Build)
const frontendDistPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendDistPath));

// Routes
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is healthy', timestamp: new Date() });
});

app.use('/api/v1/interviews', interviewRoutes);

// Fallback for React Router (Single Page Application)
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
});

const errorHandler = require('./middlewares/error');

app.use(errorHandler);

module.exports = app;
