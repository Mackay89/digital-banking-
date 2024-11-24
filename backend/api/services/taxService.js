// backend/api/services/taxService.js

const { getGlobalTaxRules } = require('../utils/jurisdiction-tax-rules');

class TaxService {
  static calculateGlobalTax(amount, jurisdiction) {
    const globalTaxRules = getGlobalTaxRules(jurisdiction);
    const globalTax = amount * globalTaxRules.globalTaxRate;
    return globalTax;
  }
}

module.exports = TaxService;

