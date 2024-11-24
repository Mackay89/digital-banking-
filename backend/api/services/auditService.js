// backend/api/services/auditService.js

const { logBlockchainAudit } = require('../helpers/blockchainHelper');

class AuditService {
  static async logAudit(transaction) {
    try {
      const auditLog = await logBlockchainAudit(transaction);
      return auditLog;
    } catch (error) {
      throw new Error(`Audit logging failed: ${error.message}`);
    }
  }
}

module.exports = AuditService;

