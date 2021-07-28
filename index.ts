/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import './src/common/db/dBSequelize.ts';
import Route from './src/common/route';

const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw dotenvResult.error;
}

const app: express.Application = express();
const port: string = process.env.PORT || '5000';
const routes: Array<Route> = [];

app.use(express.json());
app.use(cors());
app.use(helmet());

// add routes

const messageExpressServer: String = `Server is listening on ${port}`;
app.get('/', (req, res) => {
  res.send(messageExpressServer);
});
app.listen(port, () => {
  routes.forEach((route: Route) => {
    console.log(`Routes configured for ${route.getName()}`);
  });
  console.log(messageExpressServer);
});
