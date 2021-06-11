const express = require("express");
const { VersionController } = require("../controller");

const VersionRouter = express.Router();

VersionRouter.get("/", VersionController.findAll);

VersionRouter.get("/:id", VersionController.findOne);

VersionRouter.post("/", VersionController.create);

VersionRouter.post("/bymodel/:id", VersionController.findByModel);

VersionRouter.put("/:id", VersionController.update);

VersionRouter.delete("/:id", VersionController.delete);

VersionRouter.get("/optionsversion/:id", VersionController.getDataOptionsVersions);

VersionRouter.post("/dataoptions", VersionController.getDataVersions);

module.exports = { VersionRouter };

