// backend/api/services/taxCalculationService.js

const { getTaxRules } = require('../utils/jurisdiction-tax-rules');

class TaxCalculationService {
  static calculateTax(amount, jurisdiction) {
    const taxRules = getTaxRules(jurisdiction);
    const taxAmount = amount * taxRules.taxRate;
    return taxAmount;
  }
}

module.exports = TaxCalculationService;

