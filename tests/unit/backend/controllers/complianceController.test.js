const request = require('supertest');
const app = require('../../../backend/server');

describe('Compliance Controller', () => {
  it('should pass KYC check', async () => {
    const response = await request(app).post('/api/compliance/kyc')
      .send({
        userId: '12345',
        document: 'Passport',
        country: 'US'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'KYC check passed');
  });

  it('should fail AML check', async () => {
    const response = await request(app).post('/api/compliance/aml')
      .send({
        userId: '12345',
        transactionAmount: 5000,
        currency: 'USD'
      });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'AML flagged');
  });
});

