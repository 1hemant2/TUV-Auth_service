const { profileRoutes } = require('./profileRoutes');
// ...import other routes...

const express = require('express');
const router = express.Router();

router.use('/profile', profileRoutes);
// ...use other routes...

module.exports = router;
