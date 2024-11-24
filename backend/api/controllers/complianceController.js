// complianceController.js
const KycAmlService = require('../services/kycAmlService');
const { handleError, handleSuccess } = require('../utils/responseHandler');

// Perform KYC check
exports.performKycCheck = async (req, res) => {
  try {
    const { userId, personalInfo } = req.body;
    const kycStatus = await KycAmlService.performKycCheck(userId, personalInfo);
    if (kycStatus === 'approved') {
      handleSuccess(res, 200, 'KYC check passed', kycStatus);
    } else {
      handleError(res, 400, 'KYC check failed', kycStatus);
    }
  } catch (error) {
    handleError(res, 500, 'Error performing KYC check', error);
  }
};

// Perform AML check
exports.performAmlCheck = async (req, res) => {
  try {
    const { userId, transactionDetails } = req.body;
    const amlStatus = await KycAmlService.performAmlCheck(userId, transactionDetails);
    if (amlStatus === 'approved') {
      handleSuccess(res, 200, 'AML check passed', amlStatus);
    } else {
      handleError(res, 400, 'AML check failed', amlStatus);
    }
  } catch (error) {
    handleError(res, 500, 'Error performing AML check', error);
  }
};

