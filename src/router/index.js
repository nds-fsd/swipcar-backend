const express = require('express');
const { User } = require('../mongo');
const { UserRouter } = require('./userRouter');

const { CarProfile } = require('../mongo');
const { CarProfileRouter } = require('./carProfileRouter');

const appRouter = express.Router();

appRouter.use('/user', UserRouter);
appRouter.use('/carprofile', CarProfileRouter);

module.exports = appRouter;