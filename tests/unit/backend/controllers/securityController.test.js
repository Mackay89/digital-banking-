const request = require('supertest');
const app = require('../../../backend/server');

describe('Security Controller', () => {
  it('should initiate MFA process', async () => {
    const response = await request(app).post('/api/security/mfa')
      .send({
        userId: '12345',
        method: 'email'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'MFA initiated');
  });

  it('should verify MFA', async () => {
    const response = await request(app).post('/api/security/verify-mfa')
      .send({
        userId: '12345',
        mfaCode: '123456'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'MFA verified');
  });
});

