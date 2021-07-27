import dotenv from 'dotenv';
import express from 'express';
// eslint-disable-next-line import/extensions
import './src/db/sequelize';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => console.log(`server is listening on ${port}`));
