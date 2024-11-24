// blockchain-bridge.js
const Web3 = require('web3');
const bridgeAbi = require('./bridgeAbi.json');

class BlockchainBridge {
  constructor(providerUrl, bridgeAddress) {
    this.web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
    this.bridgeContract = new this.web3.eth.Contract(bridgeAbi, bridgeAddress);
  }

  async initiateCrossChainTransfer(tokenAddress, recipient, amount) {
    try {
      const receipt = await this.bridgeContract.methods
        .crossChainTransfer(tokenAddress, recipient, amount)
        .send({ from: this.web3.eth.defaultAccount });
      return receipt;
    } catch (error) {
      console.error('Error in cross-chain transfer:', error);
      throw error;
    }
  }
}

module.exports = BlockchainBridge;

