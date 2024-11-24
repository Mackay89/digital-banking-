# Security Measures

## Overview
The Digital Banking System employs a comprehensive security strategy, including Multi-Factor Authentication (MFA), Zero-Knowledge Proofs (ZKPs), and encryption.

## MFA
- **Multi-Factor Authentication**: Supports multiple MFA methods including SMS-based, TOTP, and hardware-based tokens.

## Encryption
- **Data Encryption**: All sensitive data, such as user information and transactions, are encrypted using AES-256.

## Zero-Knowledge Proofs (ZKP)
- **ZKP**: Used for enhancing user privacy by proving transaction validity without disclosing any personal data.

For more security information, refer to `/backend/api/utils/encryption.js` and `/backend/api/utils/mfa.js`.

