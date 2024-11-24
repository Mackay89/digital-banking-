const request = require('supertest');
const app = require('../../../backend/server');

describe('Transaction Controller', () => {
  it('should process a transaction', async () => {
    const response = await request(app).post('/api/transaction/process')
      .send({
        fromAccount: '12345',
        toAccount: '67890',
        amount: 100,
        currency: 'USD'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('transactionId');
  });

  it('should fail for insufficient funds', async () => {
    const response = await request(app).post('/api/transaction/process')
      .send({
        fromAccount: '12345',
        toAccount: '67890',
        amount: 10000,
        currency: 'USD'
      });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Insufficient funds');
  });
});

