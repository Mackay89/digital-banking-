// server.js
// Main server entry point for the Digital Banking System Backend

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
const config = require('./config');
const routes = require('./api/routes'); // Import all routes

// Create an Express application
const app = express();

// Middleware setup
app.use(helmet()); // Add security-related HTTP headers
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(compression()); // Compress response bodies
app.use(morgan('dev')); // HTTP request logger

// Connect to MongoDB
mongoose
  .connect(config.db.uri)  // Removed deprecated options
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit on failure
  });

// Serve static files from Vue's dist folder
app.use(express.static(path.join(__dirname, '../digital-banking-system-frontend/dist')));

// Catch-all route to serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../digital-banking-system-frontend/dist/index.html'));
});

// Use the routes defined in the routes module
app.use('/api', routes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
  });
  
  // Respond with error details in development, generic message in production
  const responseMessage = process.env.NODE_ENV === 'development' ? err.stack : 'Internal Server Error';
  res.status(err.status || 500).json({ error: responseMessage });
});

// Start the server
const PORT = config.server.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

