import apiService from './apiService';

export const getTransactionMetrics = () => {
  return apiService.get('/monitoring');
};

export default { getTransactionMetrics };

