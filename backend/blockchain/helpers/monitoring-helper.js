// monitoring-helper.js
/**
 * Logs transaction performance metrics.
 * @param {string} transactionId - Unique identifier for the transaction.
 * @param {Object} metrics - Performance metrics, e.g., latency, success rate.
 */
function logTransactionMetrics(transactionId, metrics) {
    console.log(`Transaction ID: ${transactionId}`, metrics);
}

module.exports = { logTransactionMetrics };

