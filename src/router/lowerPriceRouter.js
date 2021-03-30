const express = require("express");
const { LowerPriceController } = require("../controller");

const LowerPriceRouter = express.Router();

LowerPriceRouter.get("/", LowerPriceController.findAll);

LowerPriceRouter.get("/:id", LowerPriceController.findOne);

LowerPriceRouter.post("/", LowerPriceController.create);

LowerPriceRouter.put("/:id", LowerPriceController.update);

LowerPriceRouter.delete("/:id", LowerPriceController.delete);

module.exports = { LowerPriceRouter };
