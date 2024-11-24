// transactionController.js
const Transaction = require('../models/transactionModel');  // Transaction model
const PaymentService = require('../services/paymentService'); // Service for handling payment logic
const TaxService = require('../services/taxCalculationService');  // Service for handling tax calculations
const { handleError, handleSuccess } = require('../utils/responseHandler');

// Initiate a transaction
exports.createTransaction = async (req, res) => {
  try {
    const { senderAccountId, receiverAccountId, amount, tokenType } = req.body;

    // Process payment
    const payment = await PaymentService.processPayment(senderAccountId, receiverAccountId, amount, tokenType);
    
    // Calculate taxes
    const tax = await TaxService.calculateTax(senderAccountId, amount);

    // Create the transaction record
    const transaction = new Transaction({ senderAccountId, receiverAccountId, amount, tokenType, tax });
    await transaction.save();

    handleSuccess(res, 201, 'Transaction successful', { transaction, payment, tax });
  } catch (error) {
    handleError(res, 500, 'Error processing transaction', error);
  }
};

// Get transaction details
exports.getTransactionDetails = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);
    if (!transaction) {
      return handleError(res, 404, 'Transaction not found');
    }
    handleSuccess(res, 200, 'Transaction details retrieved successfully', transaction);
  } catch (error) {
    handleError(res, 500, 'Error fetching transaction details', error);
  }
};

