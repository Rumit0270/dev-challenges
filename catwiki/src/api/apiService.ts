import axios from 'axios';

const BASE_URL = process.env.CATAPI_URL || '';
const API_KEY = process.env.CATAPI_KEY || '';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

export default instance;
