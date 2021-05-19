const express = require('express');
const { CarProfileController } = require('../controller');

const CarProfileRouter = express.Router();

CarProfileRouter.get('/', CarProfileController.findAll);

// CarProfileRouter.post("/dataoptions", CarProfileController.getDataOptions);

// CarProfileRouter.get("/lengthData", CarProfileController.findAllLength);

CarProfileRouter.get('/:id', CarProfileController.findOne);

CarProfileRouter.post('/', CarProfileController.createCarProfile);

// CarProfileRouter.post('/search', CarProfileController.search);

CarProfileRouter.put('/:id', CarProfileController.updateCarProfile);

CarProfileRouter.delete('/:id', CarProfileController.deleteCarProfile);

module.exports = { CarProfileRouter };
