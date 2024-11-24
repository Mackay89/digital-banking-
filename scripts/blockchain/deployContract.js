// /scripts/blockchain/deployContract.js

const Web3 = require('web3');
const fs = require('fs');
const path = require('path');
const { abi, evm } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../blockchain/contracts/token-contracts/store_of_value_token.sol.json')));

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));  // Change to your Ethereum provider URL

const deployContract = async () => {
    const accounts = await web3.eth.getAccounts();
    const deployer = accounts[0];  // First account from the node

    console.log('Deploying contract from account:', deployer);

    const contract = new web3.eth.Contract(abi);

    const deployedContract = await contract
        .deploy({ data: evm.bytecode.object })
        .send({ from: deployer, gas: 5000000 });

    console.log('Contract deployed at:', deployedContract.options.address);
};

deployContract().catch(error => {
    console.error("Deployment failed:", error);
});

