const taxCalculationService = require('../../../backend/services/taxCalculationService');

describe('Tax Calculation Service', () => {
  it('should calculate tax for US jurisdiction', async () => {
    const tax = await taxCalculationService.calculateTax({
      amount: 1000,
      country: 'US'
    });
    expect(tax).toBeGreaterThan(0);
    expect(tax).toHaveProperty('amount');
  });

  it('should return error for unsupported jurisdiction', async () => {
    const tax = await taxCalculationService.calculateTax({
      amount: 1000,
      country: 'XYZ'
    });
    expect(tax).toHaveProperty('status', 'failure');
    expect(tax).toHaveProperty('message', 'Jurisdiction not supported');
  });
});

