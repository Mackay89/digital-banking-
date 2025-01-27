// /services/alertService.js
export default {
  getNotifications() {
    // Mocked notifications for demo
    return [
      { type: 'error', message: 'Transaction failed due to insufficient funds.' },
      { type: 'success', message: 'Transaction completed successfully.' },
    ];
  },

  sendAlert(type, message) {
    // Method to send an alert, could be expanded for real-time alerts (e.g., email/SMS)
    console.log(`${type.toUpperCase()}: ${message}`);
  },
};

