// server.js
// Main server entry point for the Digital Banking System Backend

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const config = require('./config');
const routes = require('./api/routes');  // Import all routes

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
mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);  // Exit on failure
});

// Use the routes defined in the routes module
app.use('/api', routes);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal Server Error' });
});

// Start the server
const PORT = config.server.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

