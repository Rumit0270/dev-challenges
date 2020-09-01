import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';

import imagesRoutes from './routes/images';

const app = express();

app.use(cors({ origin: true }));
app.use(helmet());
app.use(compression());

app.use('/images', imagesRoutes);

exports.widgets = functions.https.onRequest(app);
