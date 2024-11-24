// /scripts/monitoring/performance-monitoring.js

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// API to retrieve performance metrics (replace with actual API or monitoring service)
const API_URL = "http://localhost:3000/api/metrics";  // Replace with actual endpoint

const monitorPerformance = async () => {
    try {
        const response = await axios.get(API_URL);
        const metrics = response.data;

        // Log the performance metrics in a file
        const logFile = path.join(__dirname, 'performance.log');
        const logEntry = `${new Date().toISOString()} - ${JSON.stringify(metrics)}\n`;

        fs.appendFileSync(logFile, logEntry);
        console.log('Performance logged successfully');

    } catch (error) {
        console.error('Error fetching performance metrics:', error);
    }
};

// Set interval to monitor performance every minute
setInterval(monitorPerformance, 60000);  // 60 seconds interval

