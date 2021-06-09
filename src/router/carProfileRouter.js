const express = require('express');
const { CarProfileController } = require('../controller');

const CarProfileRouter = express.Router();

CarProfileRouter.get('/', CarProfileController.findAll);

CarProfileRouter.post("/dataoptions", CarProfileController.getDataCarProfiles);

// CarProfileRouter.get("/lengthData", CarProfileController.findAllLength);

CarProfileRouter.get('/search', CarProfileController.search);

CarProfileRouter.get('/bymodel/:id', CarProfileController.findByModel);

CarProfileRouter.get('/:id', CarProfileController.findOne);

CarProfileRouter.post('/', CarProfileController.createCarProfile);

CarProfileRouter.put('/:id', CarProfileController.updateCarProfile);

CarProfileRouter.delete('/:id', CarProfileController.deleteCarProfile);

module.exports = { CarProfileRouter };
