const apiRoutes = require('./api');

const dashboardRoutes = require('./dashboardRoutes.js');

const router = require('express').Router();

router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);

module.exports = router;