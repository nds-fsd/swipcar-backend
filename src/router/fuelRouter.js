const express = require("express");
const { FuelController } = require("../controller");

const FuelRouter = express.Router();

FuelRouter.get("/", FuelController.findAll);

FuelRouter.get("/:id", FuelController.findOne);

FuelRouter.post("/", FuelController.create);

FuelRouter.put("/:id", FuelController.update);

FuelRouter.delete("/:id", FuelController.delete);

module.exports = { FuelRouter };
