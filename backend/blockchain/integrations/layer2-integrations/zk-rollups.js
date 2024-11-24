// zk-rollups.js
const axios = require('axios');

class ZkRollupsAPI {
  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
  }

  async submitTransaction(sender, receiver, amount) {
    try {
      const response = await axios.post(`${this.apiEndpoint}/zk-rollup`, {
        sender,
        receiver,
        amount,
      });
      return response.data;
    } catch (error) {
      console.error('Error with zk-Rollups transaction:', error);
      throw error;
    }
  }

  async verifyTransaction(txHash) {
    try {
      const response = await axios.get(`${this.apiEndpoint}/verify/${txHash}`);
      return response.data;
    } catch (error) {
      console.error('Error verifying zk-Rollups transaction:', error);
      throw error;
    }
  }
}

module.exports = ZkRollupsAPI;

