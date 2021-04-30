const express = require("express");
const { PuertasController } = require("../controller");

const PuertasRouter = express.Router();

PuertasRouter.get("/", PuertasController.findAll);

PuertasRouter.get("/:id", PuertasController.findOne);

PuertasRouter.post("/", PuertasController.create);

PuertasRouter.put("/:id", PuertasController.update);

PuertasRouter.delete("/:id", PuertasController.delete);

module.exports = { PuertasRouter };
