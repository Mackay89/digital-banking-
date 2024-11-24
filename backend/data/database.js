// /data/database.js

const { Sequelize } = require('sequelize');
const config = require('../config'); // Database configuration

// Database connection using Sequelize
const sequelize = new Sequelize(config.database.url, {
  dialect: config.database.dialect,
  logging: false, // Disable logging, set to true for development
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Export the Sequelize instance
module.exports = sequelize;

