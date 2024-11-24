// /backend/api/models/auditTrailModel.js
const mongoose = require('mongoose');

const auditTrailSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  blockchainTransactionHash: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('AuditTrail', auditTrailSchema);

