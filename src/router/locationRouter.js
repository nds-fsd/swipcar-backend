const express = require('express');
const { LocationController } = require('../controller');

const LocationRouter = express.Router();

LocationRouter.get('/', LocationController.findAll);

LocationRouter.get('/:id', LocationController.findOne);

LocationRouter.post('/', LocationController.createLocation);

LocationRouter.post('/search', LocationController.searchLocation);

LocationRouter.put('/:id', LocationController.updateLocation);

LocationRouter.delete('/:id', LocationController.deleteLocation);

module.exports = { LocationRouter };
