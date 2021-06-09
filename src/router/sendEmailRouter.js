const express = require("express");
const { SendEmailController } = require("../controller");

const SendEmailRouter = express.Router();

SendEmailRouter.post("/signup", SendEmailController.signup);

module.exports = { SendEmailController };
