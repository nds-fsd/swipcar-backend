const express = require("express");
const {
  User,
  CarCard,
  Brand,
  Model,
  Fuel,
  EcoMark,
  LowerPrice,
  PhotoCar,
} = require("../mongo");
const { UserRouter } = require("./userRouter");
const { BrandRouter } = require("./brandRouter");
const { ModelRouter } = require("./modelRouter");
const { FuelRouter } = require("./fuelRouter");
const { EcoMarkRouter } = require("./ecoMarkRouter");
const { LowerPriceRouter } = require("./lowerPriceRouter");
const { PhotoCarRouter } = require("./photoCarRouter");

const appRouter = express.Router();

appRouter.use("/user", UserRouter);
appRouter.use("/brand", BrandRouter);
appRouter.use("/model", ModelRouter);
appRouter.use("/fuel", FuelRouter);
appRouter.use("/ecomark", EcoMarkRouter);
appRouter.use("/lowerprice", LowerPriceRouter);
appRouter.use("/photocar", PhotoCarRouter);

module.exports = appRouter;
