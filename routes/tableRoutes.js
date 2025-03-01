const tableController = require('../controller/tableController');
const { tableMiddleware } = require('../middleware/apiKeyMiddleware');
const Route = require('express').Router();

Route.get('/create', tableMiddleware, tableController.createTable);

module.exports = Route;