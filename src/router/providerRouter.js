const express = require('express');
const { ProviderController } = require('../controller');

const ProviderRouter = express.Router();

ProviderRouter.get('/', ProviderController.findAll);

ProviderRouter.get('/:id', ProviderController.findOne);

ProviderRouter.post('/', ProviderController.createProvider);

ProviderRouter.post('/search', ProviderController.searchProvider);

ProviderRouter.put('/:id', ProviderController.updateProvider);

ProviderRouter.delete('/:id', ProviderController.deleteProvider);


ProviderRouter.get('/reservations/:id', ProviderController.findReservationsArray);

module.exports = { ProviderRouter };
