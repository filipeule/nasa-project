import express from 'express';
import { httpGetAllLaunches, httpAddNewLaunch, httpAbortLauch } from './launches.controller.js';

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLauch);

export default launchesRouter;