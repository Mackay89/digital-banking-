const request = require('supertest');
const app = require('../../../backend/server'); // Assuming the main server entry point

describe('Account Controller', () => {
  it('should retrieve account details', async () => {
    const response = await request(app).get('/api/account/details');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('accountId');
  });

  it('should update account details', async () => {
    const response = await request(app).put('/api/account/update')
      .send({
        name: 'Updated Name',
        email: 'updatedemail@example.com'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Account updated successfully');
  });
});

