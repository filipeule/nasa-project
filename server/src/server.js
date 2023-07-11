import http from 'http';
import app from './app.js';

import 'dotenv/config';

import { mongoConnect } from './services/mongo.js';
import { loadPlanetsData } from './models/planets.model.js';
import { loadLaunchData } from './models/launches.model.js';


const port = process.env.PORT || 8000;

const server = http.createServer(app);

await mongoConnect();

await loadPlanetsData();

await loadLaunchData();

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});