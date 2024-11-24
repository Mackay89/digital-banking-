// config.js
// Configuration for the backend, including API keys, DB URI, and server settings

const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
    // MongoDB URI for connecting to the database
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/digital_banking_system', // Default to local MongoDB if no URI is provided
    },
    
    // Server settings
    server: {
        port: process.env.PORT || 3000, // Default to port 3000
        environment: process.env.NODE_ENV || 'development', // Default to development
    },

    // API Keys (for third-party integrations like payment gateways, etc.)
    apiKeys: {
        paymentGatewayApiKey: process.env.PAYMENT_GATEWAY_API_KEY || 'your-api-key-here', // Example for payment gateway integration
        blockchainApiKey: process.env.BLOCKCHAIN_API_KEY || 'your-blockchain-api-key-here', // Example for blockchain-related integration
        cbdcApiKey: process.env.CBDC_API_KEY || 'your-cbdc-api-key-here', // Example for CBDC integration
    },

    // Security Configurations
    security: {
        jwtSecret: process.env.JWT_SECRET || 'your-jwt-secret', // JWT secret for authentication
        tokenExpiration: process.env.TOKEN_EXPIRATION || '1h', // Default token expiration time
        saltRounds: process.env.SALT_ROUNDS || 10, // Salt rounds for bcrypt password hashing
    },

    // External Service URLs (example)
    externalServices: {
        paymentGatewayUrl: process.env.PAYMENT_GATEWAY_URL || 'https://api.paymentgateway.com',
        blockchainNodeUrl: process.env.BLOCKCHAIN_NODE_URL || 'https://api.blockchain-node.com',
    },

    // Logging Configuration (can be extended for more robust logging)
    logging: {
        level: process.env.LOG_LEVEL || 'info', // Log level (e.g., 'info', 'debug', 'error')
        logFilePath: process.env.LOG_FILE_PATH || '/var/log/digital-banking-system.log', // Path for storing logs
    },

    // Other configurations (can be expanded)
    misc: {
        defaultCurrency: process.env.DEFAULT_CURRENCY || 'USD',
    },
};

