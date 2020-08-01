import axios from 'axios';

const BASE_URL = 'https://restcountries.eu/rest/v2';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
