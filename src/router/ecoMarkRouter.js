const express = require("express");
const { EcoMarkController } = require("../controller");

const EcoMarkRouter = express.Router();

EcoMarkRouter.get("/", EcoMarkController.findAll);

EcoMarkRouter.get("/:id", EcoMarkController.findOne);

EcoMarkRouter.post("/", EcoMarkController.create);

EcoMarkRouter.put("/:id", EcoMarkController.update);

EcoMarkRouter.delete("/:id", EcoMarkController.delete);

module.exports = { EcoMarkRouter };
