import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

import logger from './utils/logger';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('short'));

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Working',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server listening at port: ${PORT}`);
});
