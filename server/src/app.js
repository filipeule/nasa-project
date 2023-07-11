import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';

import api from './routes/api.js';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.resolve('public')));

app.use('/v1', api);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

export default app;