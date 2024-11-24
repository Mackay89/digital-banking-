// backend/api/services/layer2Service.js

const { processLayer2Transaction } = require('../helpers/layer2Helper');

class Layer2Service {
  static async processTransaction(transactionDetails) {
    try {
      const result = await processLayer2Transaction(transactionDetails);
      return result;
    } catch (error) {
      throw new Error(`Layer-2 transaction failed: ${error.message}`);
    }
  }
}

module.exports = Layer2Service;

