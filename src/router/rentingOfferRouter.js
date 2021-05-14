const express = require('express');
const { RentingOfferController } = require('../controller');

const RentingOfferRouter = express.Router();

RentingOfferRouter.get('/', RentingOfferController.findAll);

RentingOfferRouter.get('/:id', RentingOfferController.findOne);

RentingOfferRouter.post('/', RentingOfferController.createRentingOffer);

RentingOfferRouter.post('/search', RentingOfferController.searchRentingOffer);

RentingOfferRouter.put('/:id', RentingOfferController.updateRentingOffer);

RentingOfferRouter.delete('/:id', RentingOfferController.deleteRentingOffer);

module.exports = { RentingOfferRouter };
