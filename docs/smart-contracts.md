# Smart Contracts

This section outlines the core smart contracts deployed on the blockchain. The contracts are written in Solidity and include the following:

## Token Contracts
- **store_of_value_token.sol**: A stable value token (e.g., USDC or DAI) designed to store value.
- **transaction_token.sol**: A utility token used for transactions within the system.

## Inflation Management
- **inflation-management.sol**: A smart contract that dynamically adjusts the token supply based on inflation targets.

## Governance
- **governance.sol**: Smart contract that allows token holders to participate in decentralized governance.

## CBDC Integration
- **cbdc-integration.sol**: Smart contract that facilitates interaction with Central Bank Digital Currencies (CBDC).

## Layer-2 Solutions
- **optimistic-rollups.sol**: Integration with Optimistic Rollups for scaling Ethereum.
- **zk-rollups.sol**: Integration with zk-Rollups for zero-knowledge proof-based scalability.

## Multi-Token Standard
- **multi-token-standard.sol**: Supports ERC-721 and ERC-1155 tokens for NFTs and other multi-token use cases.

---

For detailed contract functionality and deployment steps, refer to the smart contract files in the `/backend/blockchain/contracts` directory.

