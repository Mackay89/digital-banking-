// securityController.js
const SecurityService = require('../services/securityService');
const { handleError, handleSuccess } = require('../utils/responseHandler');

// Initiate MFA process
exports.initiateMfa = async (req, res) => {
  try {
    const { userId } = req.body;
    const mfaStatus = await SecurityService.initiateMfa(userId);
    handleSuccess(res, 200, 'MFA initiated successfully', mfaStatus);
  } catch (error) {
    handleError(res, 500, 'Error initiating MFA', error);
  }
};

// Verify MFA code
exports.verifyMfaCode = async (req, res) => {
  try {
    const { userId, mfaCode } = req.body;
    const verificationStatus = await SecurityService.verifyMfaCode(userId, mfaCode);
    if (verificationStatus === 'verified') {
      handleSuccess(res, 200, 'MFA verified successfully', verificationStatus);
    } else {
      handleError(res, 400, 'MFA verification failed', verificationStatus);
    }
  } catch (error) {
    handleError(res, 500, 'Error verifying MFA', error);
  }
};

