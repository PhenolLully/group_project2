const express = require('express');
const router = express.Router();
const movieRoutes = require('./movie-routes');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);


router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = router;
