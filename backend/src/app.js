const express = require('express');
const cors = require('cors');

const path = require('path');
const fs = require('fs');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const interviewRoutes = require('./routes/interview.routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware); // Custom Application-level middleware

// Serve Static Files (Standard Express way)
// app.use(express.static(path.join(__dirname, '../public')));

// Serve Static Files (Using File Stream as requested)
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Pipe the read stream to the response stream
    readStream.pipe(res);

    readStream.on('error', (err) => {
        console.error('Stream error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error while streaming file');
    });
});

// Routes
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is healthy', timestamp: new Date() });
});

app.use('/api/v1/interviews', interviewRoutes);

const errorHandler = require('./middlewares/error');

app.use(errorHandler);

module.exports = app;
