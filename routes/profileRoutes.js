const profileController = require('../controller/profileController');
const authMiddleware = require('../middleware/authMiddleware');

const Route = require('express').Router();

Route.get('/user', authMiddleware, profileController.createUser);

module.exports = Route;