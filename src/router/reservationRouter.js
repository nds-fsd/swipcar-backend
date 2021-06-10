const express = require('express');
const { ReservationController } = require('../controller');

const ReservationRouter = express.Router();

ReservationRouter.get('/', ReservationController.findAll);

ReservationRouter.get('/:id', ReservationController.findOne);

ReservationRouter.post('/', ReservationController.createReservation);

ReservationRouter.post('/search', ReservationController.searchReservation);

ReservationRouter.put('/:id', ReservationController.updateReservation);

ReservationRouter.delete('/:id', ReservationController.deleteReservation);

ReservationRouter.post('/byUser/:id', ReservationController.findByUser);

ReservationRouter.post('/byProvider/:id', ReservationController.findByProvider);

module.exports = { ReservationRouter };
