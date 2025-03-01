const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

const Route = require('express').Router();

Route.get('/create', userController.createUser);

module.exports = Route;