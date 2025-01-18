import estadoController from './controllers/estadoController.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import env from 'dotenv';

env.config('.env');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(morgan('dev'));
app.use('/estado', estadoController);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
