
const express = require("express");
const { User } = require("../mongo");
const { UserRouter } = require("./userRouter");

const { CarProfile } = require("../mongo");
const { CarProfileRouter } = require("./carProfileRouter");

const { Equipment } = require("../mongo");
const { EquipmentRouter } = require("./equipmentRouter");

const { Goody } = require("../mongo");
const { GoodyRouter } = require("./goodyRouter");

const { RentingOption } = require("../mongo");
const { RentingOptionRouter } = require("./rentingOptionRouter");

const appRouter = express.Router();

appRouter.use("/user", UserRouter);
appRouter.use("/carprofile", CarProfileRouter);
appRouter.use("/equipment", EquipmentRouter);
appRouter.use("/goody", GoodyRouter);
appRouter.use("/rentingoption", RentingOptionRouter);

module.exports = appRouter;
