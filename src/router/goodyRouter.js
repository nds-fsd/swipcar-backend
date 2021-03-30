const express = require("express");
const { GoodyController } = require("../controller");

const GoodyRouter = express.Router();

GoodyRouter.get("/", GoodyController.findAll);

GoodyRouter.get("/:id", GoodyController.findOne);

GoodyRouter.post("/", GoodyController.createGoody);

GoodyRouter.put("/:id", GoodyController.updateGoody);

GoodyRouter.delete("/:id", GoodyController.deleteGoody);

module.exports = { GoodyRouter };
