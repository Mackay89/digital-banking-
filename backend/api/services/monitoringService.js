// backend/api/services/monitoringService.js

const { fetchPerformanceMetrics, monitorTransaction } = require('../helpers/monitoringHelper');

class MonitoringService {
  static async getTransactionPerformance(transactionId) {
    try {
      const metrics = await fetchPerformanceMetrics(transactionId);
      return metrics;
    } catch (error) {
      throw new Error(`Transaction performance monitoring failed: ${error.message}`);
    }
  }

  static async monitorTransactions() {
    try {
      const performanceData = await monitorTransaction();
      return performanceData;
    } catch (error) {
      throw new Error(`Transaction monitoring failed: ${error.message}`);
    }
  }
}

module.exports = MonitoringService;

