const express = require("express");
const { EquipmentController } = require("../controller");

const EquipmentRouter = express.Router();

EquipmentRouter.get("/", EquipmentController.findAll);

EquipmentRouter.get("/:id", EquipmentController.findOne);

EquipmentRouter.post("/", EquipmentController.createEquipment);

EquipmentRouter.put("/:id", EquipmentController.updateEquipment);

EquipmentRouter.delete("/:id", EquipmentController.deleteEquipment);

module.exports = { EquipmentRouter };
