import axios from 'axios';

// Use cors anywhere url to bypass browsers CORS check
const CORS_ANYWHERE_URL = 'https://bypass-any-cors.herokuapp.com/';
const API_URL = 'https://jobs.github.com';

const BASE_URL = CORS_ANYWHERE_URL + API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
