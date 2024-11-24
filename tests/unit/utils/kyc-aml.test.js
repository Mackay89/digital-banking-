const kycAml = require('../../../backend/utils/kyc-aml');

describe('KYC/AML Utility', () => {
  it('should pass KYC check', async () => {
    const result = await kycAml.checkKyc('12345');
    expect(result).toHaveProperty('status', 'passed');
  });

  it('should flag AML transaction', async () => {
    const result = await kycAml.checkAml('12345', 5000);
    expect(result).toHaveProperty('status', 'flagged');
    expect(result).toHaveProperty('message', 'Suspicious activity detected');
  });
});

