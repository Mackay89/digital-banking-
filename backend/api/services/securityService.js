// backend/api/services/securityService.js

const { enforceMFA, rateLimitRequests } = require('../utils/securityUtils');

class SecurityService {
  static async verifyMFA(user, token) {
    try {
      const result = await enforceMFA(user, token);
      return result;
    } catch (error) {
      throw new Error(`MFA verification failed: ${error.message}`);
    }
  }

  static async applyRateLimit(ipAddress) {
    try {
      const result = await rateLimitRequests(ipAddress);
      return result;
    } catch (error) {
      throw new Error(`Rate limiting failed: ${error.message}`);
    }
  }
}

module.exports = SecurityService;

