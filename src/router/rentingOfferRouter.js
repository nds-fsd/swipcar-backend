const express = require('express');
const { RentingOfferController } = require('../controller');

const RentingOfferRouter = express.Router();

RentingOfferRouter.get('/', RentingOfferController.findAll);

RentingOfferRouter.get('/:id', RentingOfferController.findOne);

RentingOfferRouter.post('/', RentingOfferController.createRentingOffer);

RentingOfferRouter.post('/newcars', RentingOfferController.findNewCars);

RentingOfferRouter.post('/usedcars', RentingOfferController.findUsedCars);

RentingOfferRouter.post('/vancars', RentingOfferController.findVanCars);

RentingOfferRouter.post('/search', RentingOfferController.search);

RentingOfferRouter.put('/:id', RentingOfferController.updateRentingOffer);

RentingOfferRouter.delete('/:id', RentingOfferController.deleteRentingOffer);



RentingOfferRouter.post('/byProvider/:id', RentingOfferController.findByProvider);

RentingOfferRouter.post('/allRentingOffers', RentingOfferController.findAllRentingOffers);


module.exports = { RentingOfferRouter };
