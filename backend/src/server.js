const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const error = require('./middlewares/error');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Connect to Database
// connectDB();

// Create the HTTP server using the Express app
const server = http.createServer(app);


app.use(error); 

// Start the server
server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});



