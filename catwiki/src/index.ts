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
import catRoutes from './routes/cats';
import connectDb from './utils/connectDb';
import { seedFavouriteBreeds } from './utils/seeds';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('short'));
app.use(express.json());

app.use('/api/breeds', catRoutes);

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Working',
  });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  const swaggerUi = require('swagger-ui-express');
  const swaggerJsDoc = require('swagger-jsdoc');

  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Catwiki API',
        description: 'Catwiki API definition',
        version: '1.0.0',
        contact: {
          name: 'Rumit Tandukar',
        },
        servers: [`http://localhost:${PORT}`],
      },
    },

    apis: ['**/routes/*.ts', '**/controllers/*.ts'],
  };

  const specs = swaggerJsDoc(swaggerOptions);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

connectDb(async () => {
  try {
    await seedFavouriteBreeds();
  } catch (err) {
    logger.error(`Error seeding the database: ${err}`);
    return;
  }

  app.listen(PORT, () => {
    logger.info(`Server listening at port: ${PORT}`);
  });
});
