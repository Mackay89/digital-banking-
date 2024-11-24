// taxController.js
const TaxService = require('../services/taxCalculationService');
const { handleError, handleSuccess } = require('../utils/responseHandler');

// Get tax details for a transaction
exports.getTransactionTax = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const tax = await TaxService.calculateTax(transactionId);
    if (!tax) {
      return handleError(res, 404, 'Tax not found');
    }
    handleSuccess(res, 200, 'Tax details retrieved successfully', tax);
  } catch (error) {
    handleError(res, 500, 'Error fetching tax details', error);
  }
};

// Generate tax report
exports.generateTaxReport = async (req, res) => {
  try {
    const { startDate, endDate, jurisdiction } = req.body;
    const taxReport = await TaxService.generateTaxReport(startDate, endDate, jurisdiction);
    handleSuccess(res, 200, 'Tax report generated successfully', taxReport);
  } catch (error) {
    handleError(res, 500, 'Error generating tax report', error);
  }
};

