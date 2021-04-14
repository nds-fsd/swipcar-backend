const express = require("express");
const { RentingOptionController } = require("../controller");

const RentingOptionRouter = express.Router();

RentingOptionRouter.get("/", RentingOptionController.findAll);

RentingOptionRouter.get("/:id", RentingOptionController.findOne);

RentingOptionRouter.post("/", RentingOptionController.createRentingOption);

RentingOptionRouter.put("/:id", RentingOptionController.updateRentingOption);

RentingOptionRouter.delete("/:id", RentingOptionController.deleteRentingOption);

module.exports = { RentingOptionRouter };
