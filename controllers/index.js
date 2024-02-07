const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// Use '/api' prefix for API routes
router.use('/api', apiRoutes);

// Use '/' for home routes
router.use('/', homeRoutes);

module.exports = router;
