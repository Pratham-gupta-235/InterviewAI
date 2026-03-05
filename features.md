# Interview Platform - Current Features

Based on the project's current state, here are the features that have been implemented:

## 1. Core Server Setup
- **Express.js Backend**: The project is structured as a Node.js REST API using Express (`src/app.js` and `server.js`).
- **Development Tooling**: Configured with `nodemon` for auto-restarting during development.
- **Environment Variables**: Uses `dotenv` for managing environment-specific configurations.

## 2. Middlewares
- **CORS Support**: Cross-Origin Resource Sharing is enabled for frontend-backend communication.
- **JSON Body Parsing**: Built-in support for parsing JSON payloads and URL-encoded data.
- **Custom Logging**: A custom Application-level logger middleware (`loggerMiddleware.js`) intercepts and logs requests.
- **Error Handling**: A centralized error handling middleware (`errorMiddleware.js`) manages application errors.

## 3. Database
- **Mongoose / MongoDB**: The `mongoose` dependency is installed, indicating a MongoDB setup is in progress or completed (located in `src/config/db.js`).

## 4. Static File Serving
- **HTML Serving via Streams**: The root route (`GET /`) dynamically streams a static frontend file (`public/index.html`) using Node.js `fs.createReadStream`.

## 5. Interview API Endpoints (`/api/v1/interviews`)
A modular routing setup (`src/routes/interviewRoutes.js`) is active with the following endpoints (currently using mock data in the controller):

- **`GET /api/v1/interviews`**: Retrieves a list of all interviews. (Returns sample data like "React Frontend Developer" and "Node.js Backend Developer").
- **`GET /api/v1/interviews/:id`**: Retrieves the details of a specific interview by its ID.
- **`POST /api/v1/interviews`**: Creates a new interview. Requires `title` and `type` in the request body. Automatically assigns an ID and sets the status to "Pending".

---
*Note: The current controller logic relies on simulated mock data, paving the way for eventual database integration using Mongoose models.*
