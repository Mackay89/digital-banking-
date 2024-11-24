// tax-helper.js
/**
 * Calculates tax for a transaction based on jurisdiction.
 * @param {number} amount - The transaction amount.
 * @param {string} jurisdiction - The jurisdiction's tax rules.
 * @returns {number} - Calculated tax.
 */
function calculateTax(amount, jurisdiction) {
    const taxRates = { US: 0.07, CO: 0.05, TN: 0.03 }; // Example rates
    return amount * (taxRates[jurisdiction] || 0);
}

module.exports = { calculateTax };

