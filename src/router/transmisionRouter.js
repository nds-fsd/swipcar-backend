const express = require("express");
const { TransmisionController } = require("../controller");

const TransmisionRouter = express.Router();

TransmisionRouter.get("/", TransmisionController.findAll);

TransmisionRouter.get("/:id", TransmisionController.findOne);

TransmisionRouter.post("/", TransmisionController.create);

TransmisionRouter.put("/:id", TransmisionController.update);

TransmisionRouter.delete("/:id", TransmisionController.delete);

module.exports = { TransmisionRouter };
