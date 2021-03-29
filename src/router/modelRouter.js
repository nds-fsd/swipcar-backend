const express = require("express");
const { ModelController } = require("../controller");

const ModelRouter = express.Router();

ModelRouter.get("/", ModelController.findAll);

ModelRouter.get("/:id", ModelController.findOne);

ModelRouter.post("/", ModelController.create);

ModelRouter.put("/:id", ModelController.update);

ModelRouter.delete("/:id", ModelController.delete);

module.exports = { ModelRouter };
