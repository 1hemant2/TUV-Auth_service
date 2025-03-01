const express = require('express');
const router = express.Router();
const tableRoutes = require('./tableRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/table', tableRoutes);

module.exports = router;
