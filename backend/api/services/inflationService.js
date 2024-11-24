// backend/api/services/inflationService.js

const { adjustTokenSupply } = require('../helpers/blockchainHelper');

class InflationService {
  static async adjustSupply(targetSupply) {
    try {
      const adjustment = await adjustTokenSupply(targetSupply);
      return adjustment;
    } catch (error) {
      throw new Error(`Token supply adjustment failed: ${error.message}`);
    }
  }
}

module.exports = InflationService;

