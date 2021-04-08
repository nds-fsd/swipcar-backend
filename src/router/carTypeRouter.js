const express = require('express');
const { CarTypeController } = require('../controller');

const CarTypeRouter = express.Router();

CarTypeRouter.get('/', CarTypeController.findAll);

CarTypeRouter.get('/:id', CarTypeController.findOne);

CarTypeRouter.post('/', CarTypeController.createCarType);

CarTypeRouter.put('/:id', CarTypeController.updateCarType);

CarTypeRouter.delete('/:id', CarTypeController.deleteCarType);

module.exports = { CarTypeRouter };
