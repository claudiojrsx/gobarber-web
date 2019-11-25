import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.172.24.57:3333',
});

export default api;
