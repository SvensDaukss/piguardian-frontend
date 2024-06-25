import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // This should match the Nginx configuration
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Retrieve the token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add the token to the Authorization header
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
