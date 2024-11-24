import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://api.digitalbanking.com', // Change to your backend URL
  timeout: 10000
});

export const getUserData = () => {
  return apiService.get('/user');
};

export const getTransactionHistory = () => {
  return apiService.get('/transactions');
};

export default apiService;

