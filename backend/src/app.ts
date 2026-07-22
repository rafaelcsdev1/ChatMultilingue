import express from 'express';
import cors from 'cors';
import routes from './routes';
import { notFoundHandler } from './middlewares/not-found.middleware';
import { errorHandler } from './middlewares/error.middleware';
import { getHealth } from './controllers/health.controller';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', getHealth);
app.use('/api', routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
