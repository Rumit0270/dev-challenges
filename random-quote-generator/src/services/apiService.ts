import axios from 'axios';

const BASE_URL = 'https://quote-garden.herokuapp.com/api/v2';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
