const express = require('express');

const {
  User,
  RentingOption,
  Goody,
  Equipment,
  CarProfile,
  CarType,
  CarCard,
  Brand,
  Model,
  Version,
  Fuel,
  EcoMark,
  Transmision,
  Color,
  Puertas,
  LowerPrice,
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
const { RentingOptionRouter } = require('./rentingOptionRouter');
const { BrandRouter } = require('./brandRouter');
const { ModelRouter } = require('./modelRouter');
const { VersionRouter } = require('./versionRouter');
const { FuelRouter } = require('./fuelRouter');
const { EcoMarkRouter } = require('./ecoMarkRouter');
const { TransmisionRouter } = require('./transmisionRouter');
const { ColorRouter } = require('./colorRouter');
const { PuertasRouter } = require('./puertasRouter');
const { LowerPriceRouter } = require('./lowerPriceRouter');
const { PhotoCarRouter } = require('./photoCarRouter');
const { CarCardRouter } = require('./carCardRouter');
const { LocationRouter } = require('./locationRouter');
const { ProviderRouter } = require('./providerRouter');
const { ReservationRouter } = require('./reservationRouter');
const { RentingOfferRouter } = require('./rentingOfferRouter');

const appRouter = express.Router();

appRouter.use('/user', UserRouter);
appRouter.use('/carprofile', CarProfileRouter);
appRouter.use('/cartype', CarTypeRouter);
appRouter.use('/equipment', EquipmentRouter);
appRouter.use('/goody', GoodyRouter);
appRouter.use('/rentingoption', RentingOptionRouter);
appRouter.use('/brand', BrandRouter);
appRouter.use('/model', ModelRouter);
appRouter.use('/version', VersionRouter);
appRouter.use('/fuel', FuelRouter);
appRouter.use('/ecomark', EcoMarkRouter);
appRouter.use('/transmision', TransmisionRouter);
appRouter.use('/color', ColorRouter);
appRouter.use('/puertas', PuertasRouter);
appRouter.use('/lowerprice', LowerPriceRouter);
appRouter.use('/photocar', PhotoCarRouter);
appRouter.use('/carcard', CarCardRouter);
appRouter.use('/location', LocationRouter);
appRouter.use('/provider', ProviderRouter);
appRouter.use('/reservation', ReservationRouter);
appRouter.use('/rentingoffer', RentingOfferRouter);

module.exports = appRouter;
