const express = require('express');
const { CarCardController } = require('../controller');

const CarCardRouter = express.Router();

CarCardRouter.get('/', CarCardController.findAll);

CarCardRouter.get('/:id', CarCardController.findOne);

CarCardRouter.post('/', CarCardController.createCarCard);

CarCardRouter.put('/:id', CarCardController.updateCarCard);

CarCardRouter.delete('/:id', CarCardController.deleteCarCard);

CarCardRouter.post('/search', CarCardController.searchNewCars);

module.exports = { CarCardRouter };
