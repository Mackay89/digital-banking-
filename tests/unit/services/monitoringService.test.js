const monitoringService = require('../../../backend/services/monitoringService');

describe('Monitoring Service', () => {
  it('should retrieve performance metrics', async () => {
    const metrics = await monitoringService.getMetrics();
    expect(metrics).toHaveProperty('transactionCount');
    expect(metrics).toHaveProperty('latency');
  });

  it('should fail if no data is available', async () => {
    const metrics = await monitoringService.getMetrics();
    expect(metrics).toHaveProperty('status', 'failure');
    expect(metrics).toHaveProperty('message', 'No metrics data available');
  });
});

