// accountController.js
const Account = require('../models/userModel');  // Assuming Account model is mapped to the 'userModel'
const { handleError, handleSuccess } = require('../utils/responseHandler'); // Utility functions for response

// Create new account
exports.createAccount = async (req, res) => {
  try {
    const { email, name, country } = req.body;
    const newAccount = new Account({ email, name, country });
    await newAccount.save();
    handleSuccess(res, 201, 'Account created successfully', newAccount);
  } catch (error) {
    handleError(res, 500, 'Error creating account', error);
  }
};

// Get account details
exports.getAccountDetails = async (req, res) => {
  try {
    const account = await Account.findById(req.params.accountId);
    if (!account) {
      return handleError(res, 404, 'Account not found');
    }
    handleSuccess(res, 200, 'Account details retrieved successfully', account);
  } catch (error) {
    handleError(res, 500, 'Error fetching account details', error);
  }
};

// Update account information
exports.updateAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.accountId, req.body, { new: true });
    if (!account) {
      return handleError(res, 404, 'Account not found');
    }
    handleSuccess(res, 200, 'Account updated successfully', account);
  } catch (error) {
    handleError(res, 500, 'Error updating account', error);
  }
};

