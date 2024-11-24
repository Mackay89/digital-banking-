// optimistic-rollups.js
const axios = require('axios');

class OptimisticRollupsAPI {
  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
  }

  async submitTransaction(sender, receiver, amount) {
    try {
      const response = await axios.post(`${this.apiEndpoint}/rollup`, {
        sender,
        receiver,
        amount,
      });
      return response.data;
    } catch (error) {
      console.error('Error with Optimistic Rollups transaction:', error);
      throw error;
    }
  }
}

module.exports = OptimisticRollupsAPI;

