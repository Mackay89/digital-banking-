const paymentService = require('../../../backend/services/paymentService');

describe('Payment Service', () => {
  it('should process payment successfully', async () => {
    const result = await paymentService.processPayment({
      fromAccount: '12345',
      toAccount: '67890',
      amount: 100,
      currency: 'USD'
    });
    expect(result).toHaveProperty('status', 'success');
    expect(result).toHaveProperty('transactionId');
  });

  it('should fail for invalid payment details', async () => {
    const result = await paymentService.processPayment({
      fromAccount: '12345',
      toAccount: '67890',
      amount: -100,
      currency: 'USD'
    });
    expect(result).toHaveProperty('status', 'failure');
    expect(result).toHaveProperty('message', 'Invalid payment details');
  });
});

