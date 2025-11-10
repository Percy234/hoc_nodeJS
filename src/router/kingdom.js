import express from 'express';
const kingdomRouter = express.Router();

import kingdomController from '../components/kingdom.controller.js';

kingdomRouter.get('/', kingdomController.getAllKingdoms);
kingdomRouter.post('/', kingdomController.createKingdom);
kingdomRouter.put('/:id', kingdomController.updateKingdom);
kingdomRouter.delete('/:id', kingdomController.deleteKingdom);

export default kingdomRouter;