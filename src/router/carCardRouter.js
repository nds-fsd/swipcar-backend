const express = require("express");
const { CarCardController } = require("../controller");

const CarCardRouter = express.Router();

CarCardRouter.get("/", CarCardController.findAll);

CarCardRouter.get("/:id", CarCardController.findOne);

CarCardRouter.post("/", CarCardController.create);

CarCardRouter.put("/:id", CarCardController.update);

CarCardRouter.delete("/:id", CarCardController.delete);

module.exports = { CarCardRouter };
