const express = require('express');
const { UserController } = require('../controller');

const UserRouter = express.Router();

UserRouter.get('/', UserController.findAll);

UserRouter.get('/:id', UserController.findOne);

UserRouter.post('/', UserController.createUser);

UserRouter.post('/search', UserController.searchUser);

UserRouter.put('/:id', UserController.updateUser);

UserRouter.delete('/:id', UserController.deleteUser);

module.exports = { UserRouter };
