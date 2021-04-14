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
  Fuel,
  EcoMark,
  Transmision,
  LowerPrice,
  PhotoCar,
} = require('../mongo');
const { UserRouter } = require('./userRouter');
const { CarProfileRouter } = require('./carProfileRouter');
const { CarTypeRouter } = require('./carTypeRouter');
const { EquipmentRouter } = require('./equipmentRouter');
const { GoodyRouter } = require('./goodyRouter');
const { RentingOptionRouter } = require('./rentingOptionRouter');
const { BrandRouter } = require('./brandRouter');
const { ModelRouter } = require('./modelRouter');
const { FuelRouter } = require('./fuelRouter');
const { EcoMarkRouter } = require('./ecoMarkRouter');
const { TransmisionRouter } = require('./transmisionRouter');
const { LowerPriceRouter } = require('./lowerPriceRouter');
const { PhotoCarRouter } = require('./photoCarRouter');
const { CarCardRouter } = require('./carCardRouter');

const appRouter = express.Router();

appRouter.use('/user', UserRouter);
appRouter.use('/carprofile', CarProfileRouter);
appRouter.use('/cartype', CarTypeRouter);
appRouter.use('/equipment', EquipmentRouter);
appRouter.use('/goody', GoodyRouter);
appRouter.use('/rentingoption', RentingOptionRouter);
appRouter.use('/brand', BrandRouter);
appRouter.use('/model', ModelRouter);
appRouter.use('/fuel', FuelRouter);
appRouter.use('/ecomark', EcoMarkRouter);
appRouter.use('/transmision', TransmisionRouter);
appRouter.use('/lowerprice', LowerPriceRouter);
appRouter.use('/photocar', PhotoCarRouter);
appRouter.use('/carcard', CarCardRouter);

module.exports = appRouter;