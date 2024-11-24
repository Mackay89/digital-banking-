// /backend/api/models/stablecoinTransactionModel.js
const mongoose = require('mongoose');

const stablecoinTransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  stablecoinType: {
    type: String,
    enum: ['USDC', 'DAI'],
    required: true,
  },
  transactionType: {
    type: String,
    enum: ['DEPOSIT', 'WITHDRAWAL'],
    required: true,
  },
  transactionStatus: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    default: 'PENDING',
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
  blockchainTransactionHash: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('StablecoinTransaction', stablecoinTransactionSchema);

