// swift-api.js
const axios = require('axios');

class SwiftAPI {
  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
  }

  async getAccountDetails(bankCode, accountNumber) {
    try {
      const response = await axios.get(`${this.apiEndpoint}/accounts/${bankCode}/${accountNumber}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching SWIFT account details:', error);
      throw error;
    }
  }

  async initiateTransfer(sourceBank, targetBank, amount) {
    try {
      const response = await axios.post(`${this.apiEndpoint}/transfer`, {
        sourceBank,
        targetBank,
        amount,
      });
      return response.data;
    } catch (error) {
      console.error('Error initiating SWIFT transfer:', error);
      throw error;
    }
  }
}

module.exports = SwiftAPI;

