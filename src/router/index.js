const express = require('express');

const {
  User,
  RentingOption,
  Goody,
  Equipment,
  CarProfile,
  CarType,
  Brand,
  Model,
  Version,
  Fuel,
  EcoMark,
  Transmision,
  Color,
  PhotoCar,
  Location,
  Provider,
  Reservation,
  RentingOffer,
} = require('../mongo');
const { UserRouter } = require('./userRouter');
const { CarProfileRouter } = require('./carProfileRouter');
const { CarTypeRouter } = require('./carTypeRouter');
const { EquipmentRouter } = require('./equipmentRouter');
const { GoodyRouter } = require('./goodyRouter');
const { BrandRouter } = require('./brandRouter');
const { ModelRouter } = require('./modelRouter');
const { VersionRouter } = require('./versionRouter');
const { FuelRouter } = require('./fuelRouter');
const { EcoMarkRouter } = require('./ecoMarkRouter');
const { TransmisionRouter } = require('./transmisionRouter');
const { ColorRouter } = require('./colorRouter');
const { PhotoCarRouter } = require('./photoCarRouter');
const { LocationRouter } = require('./locationRouter');
const { ProviderRouter } = require('./providerRouter');
const { ReservationRouter } = require('./reservationRouter');
const { RentingOfferRouter } = require('./rentingOfferRouter');
// const { SendEmailRouter } = require('./sendEmailRouter');

const appRouter = express.Router();

appRouter.use('/user', UserRouter);
appRouter.use('/carprofile', CarProfileRouter);
appRouter.use('/cartype', CarTypeRouter);
appRouter.use('/equipment', EquipmentRouter);
appRouter.use('/goody', GoodyRouter);
appRouter.use('/brand', BrandRouter);
appRouter.use('/model', ModelRouter);
appRouter.use('/version', VersionRouter);
appRouter.use('/fuel', FuelRouter);
appRouter.use('/ecomark', EcoMarkRouter);
appRouter.use('/transmision', TransmisionRouter);
appRouter.use('/color', ColorRouter);
appRouter.use('/photocar', PhotoCarRouter);
appRouter.use('/location', LocationRouter);
appRouter.use('/provider', ProviderRouter);
appRouter.use('/reservation', ReservationRouter);
appRouter.use('/rentingoffer', RentingOfferRouter);
// appRouter.use('/sendemail', SendEmailRouter);

module.exports = appRouter;
