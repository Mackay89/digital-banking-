// stablecoin-api.js
const axios = require('axios');

class StablecoinAPI {
  constructor(apiEndpoint, tokenContractAddress) {
    this.apiEndpoint = apiEndpoint;
    this.tokenContractAddress = tokenContractAddress;
  }

  async getTokenBalance(accountId) {
    try {
      const response = await axios.get(`${this.apiEndpoint}/balance/${accountId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching stablecoin balance:', error);
      throw error;
    }
  }

  async transferTokens(sender, recipient, amount) {
    try {
      const response = await axios.post(`${this.apiEndpoint}/transfer`, {
        sender,
        recipient,
        amount,
      });
      return response.data;
    } catch (error) {
      console.error('Error transferring stablecoins:', error);
      throw error;
    }
  }
}

module.exports = StablecoinAPI;

