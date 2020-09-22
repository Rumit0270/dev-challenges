import mongoose from 'mongoose';
import logger from './logger';

const CONNECTION_URL = process.env.CONNECTION_URL || '';

export default (callback: () => void) => {
  mongoose
    .connect(CONNECTION_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      callback();
    })
    .catch((err) => {
      logger.error('Cannot connect to MongoDB instance:', err);
    });
};
