const encryption = require('../../../backend/utils/encryption');

describe('Encryption Utility', () => {
  it('should encrypt and decrypt data successfully', async () => {
    const data = 'SensitiveData123';
    const encryptedData = await encryption.encrypt(data);
    const decryptedData = await encryption.decrypt(encryptedData);
    expect(decryptedData).toBe(data);
  });

  it('should fail to decrypt wrong data', async () => {
    const data = 'SensitiveData123';
    const encryptedData = await encryption.encrypt(data);
    const decryptedData = await encryption.decrypt(encryptedData + 'Fake');
    expect(decryptedData).not.toBe(data);
  });
});

