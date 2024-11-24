const request = require('supertest')
const app = require('../../../server')

describe('Transaction Controller', () => {
  it('should create a new transaction successfully', async () => {
    const res = await request(app)
      .post('/api/transactions')
      .send({
        amount: 1000,
        fromAccount: '12345',
        toAccount: '67890',
        type: 'transfer'
      })
      .expect(201)

    expect(res.body).toHaveProperty('transactionId')
    expect(res.body.amount).toBe(1000)
  })

  it('should return error for invalid transaction amount', async () => {
    const res = await request(app)
      .post('/api/transactions')
      .send({
        amount: -500,
        fromAccount: '12345',
        toAccount: '67890',
        type: 'transfer'
      })
      .expect(400)

    expect(res.body.error).toBe('Invalid transaction amount')
  })
})

