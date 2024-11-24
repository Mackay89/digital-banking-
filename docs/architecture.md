# Architecture Overview

The Digital Banking System follows a microservices-based architecture where backend services handle blockchain, payments, taxation, security, compliance, and monitoring functionalities, while the frontend uses Vue.js for dynamic UI components.

## Backend
- **Blockchain**: The core blockchain logic resides in the `/blockchain` directory, which contains smart contracts, integrations, and helpers. It includes:
  - Stablecoin contracts
  - CBDC and cross-chain integration
  - Layer-2 scalability solutions (Optimistic and zk-rollups)

- **API Layer**: RESTful API services are housed under `/api`. Key controllers manage core banking functionalities like transactions, account management, KYC/AML compliance, taxation, and security (MFA).

- **Services**: These encapsulate core business logic, including:
  - Payment and transaction processing
  - Taxation and regulatory services
  - Monitoring of transaction metrics

- **Data**: Database migration, seeding, and ORM models are located in `/data`.

## Frontend
The frontend consists of Vue.js components and views, providing a responsive user interface. It interacts with the backend services for:
- Account management
- Transactions
- Tax reports
- Monitoring

## Integration
- **CBDC**: APIs and integrations for interacting with Central Bank Digital Currencies.
- **Layer-2**: Scalable solutions for blockchain transaction optimization using zk-rollups and optimistic rollups.

---

For a more detailed description, see the individual components and architecture files under `/docs`.

