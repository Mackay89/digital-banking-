import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

export const sendTransaction = async (fromAddress, toAddress, amount) => {
  const transaction = {
    from: fromAddress,
    to: toAddress,
    value: web3.utils.toWei(amount, 'ether'),
    gas: 21000
  };
  await web3.eth.sendTransaction(transaction);
};

export default { sendTransaction };

