// jurisdiction-tax-rules.js

/**
 * Tax Rules for Different Jurisdictions
 */

const TAX_RULES = {
  US: {
    federalRate: 0.15, // 15% federal tax rate
    stateRate: 0.05,   // 5% state tax rate (example for California)
  },
  CO: {
    federalRate: 0.12, // 12% federal tax rate
    stateRate: 0.07,   // 7% state tax rate (example for Colorado)
  },
  TN: {
    federalRate: 0.20, // 20% federal tax rate
    stateRate: 0.04,   // 4% state tax rate (example for Tennessee)
  },
  // Add other jurisdictions as necessary
};

/**
 * Calculates tax for a given amount based on user's jurisdiction
 * @param {string} jurisdiction - The jurisdiction code (e.g., 'US', 'CO')
 * @param {number} amount - The amount to calculate tax on
 * @returns {object} - Tax breakdown including federal and state tax amounts
 */
const calculateTax = (jurisdiction, amount) => {
  if (!TAX_RULES[jurisdiction]) {
    throw new Error(`Tax rules for ${jurisdiction} not defined`);
  }

  const rules = TAX_RULES[jurisdiction];
  const federalTax = amount * rules.federalRate;
  const stateTax = amount * rules.stateRate;

  return {
    federalTax,
    stateTax,
    totalTax: federalTax + stateTax,
  };
};

module.exports = {
  calculateTax,
  TAX_RULES,
};

