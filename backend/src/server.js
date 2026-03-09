const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const error = require('./middlewares/error'); // Ensure error handling middleware is loaded
// Setup environment variables if not done already
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Create the HTTP server using the Express app
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

app.use(error); 

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.error(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});
