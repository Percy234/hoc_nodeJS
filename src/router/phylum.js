import express from 'express';
const phylumRouter = express.Router();

import phylumController from '../components/phylum.controller.js';

phylumRouter.get('/', phylumController.getAllPhylums);
phylumRouter.post('/', phylumController.createPhylum);
phylumRouter.put('/:id', phylumController.updatePhylum);
phylumRouter.delete('/:id', phylumController.deletePhylum);

export default phylumRouter;