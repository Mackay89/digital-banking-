// cbdc-api.js
const axios = require('axios');

class CBDCApi {
  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
  }

  async getBalance(accountId) {
    try {
      const response = await axios.get(`${this.apiEndpoint}/balance/${accountId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching CBDC balance:', error);
      throw error;
    }
  }

  async transferFunds(fromAccount, toAccount, amount) {
    try {
      const response = await axios.post(`${this.apiEndpoint}/transfer`, {
        fromAccount,
        toAccount,
        amount,
      });
      return response.data;
    } catch (error) {
      console.error('Error transferring CBDC funds:', error);
      throw error;
    }
  }
}

module.exports = CBDCApi;

