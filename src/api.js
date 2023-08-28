// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-url.com',
});

export default api;
