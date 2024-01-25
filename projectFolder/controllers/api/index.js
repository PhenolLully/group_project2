const router = require('express').Router();
const movieRoutes = require("./movie-routes");
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);



module.exports = router;
