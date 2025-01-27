// /services/monitoringService.js
export default {
  getPerformanceMetrics() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          transactionSpeed: Math.random() * 1000, // Random transaction speed
          systemLoad: Math.random() * 100, // Random system load
        });
      }, 1000);
    });
  },
};

