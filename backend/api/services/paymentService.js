// backend/api/services/paymentService.js

const { transferToken, processPayment } = require('../helpers/blockchainHelper');
const { logTransaction } = require('../utils/logging');

class PaymentService {
  static async processPayment(paymentDetails) {
    try {
      const transaction = await processPayment(paymentDetails);
      // Log the transaction on blockchain
      await logTransaction(transaction);
      return transaction;
    } catch (error) {
      throw new Error(`Payment processing failed: ${error.message}`);
    }
  }

  static async transferTokens(fromAccount, toAccount, amount, token) {
    try {
      const transferResult = await transferToken(fromAccount, toAccount, amount, token);
      await logTransaction(transferResult);
      return transferResult;
    } catch (error) {
      throw new Error(`Token transfer failed: ${error.message}`);
    }
  }
}

module.exports = PaymentService;

