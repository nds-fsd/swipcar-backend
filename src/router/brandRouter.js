const express = require("express");
const { BrandController } = require("../controller");

const BrandRouter = express.Router();

BrandRouter.get("/", BrandController.findAll);

BrandRouter.get("/:id", BrandController.findOne);

BrandRouter.post("/", BrandController.create);

BrandRouter.put("/:id", BrandController.update);

BrandRouter.delete("/:id", BrandController.delete);

module.exports = { BrandRouter };
