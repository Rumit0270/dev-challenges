import mongoose from 'mongoose';
import logger from './logger';

const MONGO_USER = process.env.MONGO_USER || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_HOST = process.env.MONGO_HOST || '';
const MONGO_DATABASE = process.env.MONGO_DATABASE || '';
const MONGO_PORT = process.env.MONGO_PORT || '';
const MONGO_TEST_DATABASE = process.env.MONGO_TEST_DATABASE || '';

const PROD_CONNECTION_URL =
  `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority` ||
  '';

const DEV_CONNECTION_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

const TEST_CONNECTION_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_TEST_DATABASE}?authSource=admin`;

const CONNECTION_URL =
  process.env.NODE_ENV === 'development'
    ? DEV_CONNECTION_URL
    : process.env.NODE_ENV === 'test'
    ? TEST_CONNECTION_URL
    : PROD_CONNECTION_URL;

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
};

export default (callback: () => void) => {
  mongoose
    .connect(CONNECTION_URL, connectionOptions)
    .then(() => {
      callback();
    })
    .catch((err) => {
      logger.error('Cannot connect to MongoDB instance:', err);
    });
};
