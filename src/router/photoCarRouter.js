const express = require("express");
const { PhotoCarController } = require("../controller");

const PhotoCarRouter = express.Router();

PhotoCarRouter.get("/", PhotoCarController.findAll);

PhotoCarRouter.get("/:id", PhotoCarController.findOne);

PhotoCarRouter.post("/", PhotoCarController.create);

PhotoCarRouter.put("/:id", PhotoCarController.update);

PhotoCarRouter.delete("/:id", PhotoCarController.delete);

module.exports = { PhotoCarRouter };
