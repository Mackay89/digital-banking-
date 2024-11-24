// taxService.js

const { calculateTax } = require('../utils/jurisdiction-tax-rules');
const { logMessage } = require('../utils/logging');

/**
 * Service to calculate and log taxes for a transaction
 * @param {string} jurisdiction - User's jurisdiction (e.g., 'US', 'CO')
 * @param {number} amount - Amount for which tax is to be calculated
 * @returns {object} - Tax details
 */
const calculateTransactionTax = (jurisdiction, amount) => {
  try {
    const taxDetails = calculateTax(jurisdiction, amount);
    logMessage(`Tax calculated for ${jurisdiction}: ${JSON.stringify(taxDetails)}`);
    return taxDetails;
  } catch (error) {
    logMessage(`Error calculating tax for ${jurisdiction}: ${error.message}`, 'error');
    throw error;
  }
};

module.exports = {
  calculateTransactionTax,
};

