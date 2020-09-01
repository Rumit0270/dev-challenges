import axios from 'axios';

const BASE_URL =
  'https://us-central1-my-unsplash-challenge.cloudfunctions.net/widgets';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
