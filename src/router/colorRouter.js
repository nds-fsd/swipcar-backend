const express = require("express");
const { ColorController } = require("../controller");

const ColorRouter = express.Router();

ColorRouter.get("/", ColorController.findAll);

ColorRouter.get("/:id", ColorController.findOne);

ColorRouter.post("/", ColorController.create);

ColorRouter.put("/:id", ColorController.update);

ColorRouter.delete("/:id", ColorController.delete);

module.exports = { ColorRouter };
