// monitoringController.js
const MonitoringService = require('../services/monitoringService');
const { handleError, handleSuccess } = require('../utils/responseHandler');

// Get transaction performance metrics
exports.getTransactionMetrics = async (req, res) => {
  try {
    const metrics = await MonitoringService.getTransactionMetrics();
    handleSuccess(res, 200, 'Transaction metrics retrieved successfully', metrics);
  } catch (error) {
    handleError(res, 500, 'Error retrieving transaction metrics', error);
  }
};

// Get system health status
exports.getSystemHealth = async (req, res) => {
  try {
    const healthStatus = await MonitoringService.getSystemHealth();
    handleSuccess(res, 200, 'System health status retrieved successfully', healthStatus);
  } catch (error) {
    handleError(res, 500, 'Error retrieving system health status', error);
  }
};

