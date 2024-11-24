// backend/api/services/cbdcService.js

const { checkCBDCCompliance, transferCBDC } = require('../helpers/cbdcHelper');

class CBDCService {
  static async transferCBDC(fromAccount, toAccount, amount) {
    try {
      const result = await transferCBDC(fromAccount, toAccount, amount);
      return result;
    } catch (error) {
      throw new Error(`CBDC transfer failed: ${error.message}`);
    }
  }

  static async checkCompliance(account) {
    try {
      const compliance = await checkCBDCCompliance(account);
      return compliance;
    } catch (error) {
      throw new Error(`CBDC compliance check failed: ${error.message}`);
    }
  }
}

module.exports = CBDCService;

