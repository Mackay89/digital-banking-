// /backend/api/models/transactionModel.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  tokenType: {
    type: String,
    enum: ['STABLE', 'UTILITY', 'CBDC'],
    required: true,
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
  transactionType: {
    type: String,
    enum: ['TRANSFER', 'WITHDRAWAL', 'DEPOSIT'],
    required: true,
  },
  taxAmount: {
    type: Number,
    default: 0,
  },
  transactionStatus: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    default: 'PENDING',
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);

