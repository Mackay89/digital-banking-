// /backend/api/models/tokenModel.js
const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  stableTokenBalance: {
    type: Number,
    default: 0,
  },
  utilityTokenBalance: {
    type: Number,
    default: 0,
  },
  cbdcTokenBalance: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Token', tokenSchema);

