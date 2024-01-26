const router = require('express').Router();
const { Genre, Movie } = require('../models');
const withAuth = require('../utils/auth');

// GET all genres for homepage
router.get('/', withAuth , async (req, res) => {
  try {
    const dbGenreData = await Genre.findAll({
      // include: [
      //   {
      //     model: Movie,
      //     attributes: ['Action', 'Thriller', "Horror", "Comedy", "Romance"],
      //   },
      // ],
    });

    const genres = dbGenreData.map((genre) =>
      genre.get({ plain: true })
    );

    res.render('homepage', {
      genres,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one genre
router.get('/genre/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the genre
    try {
      const dbGenreData = await Genre.findByPk(req.params.id, {
        include: [
          {
            model: Movie,
            attributes: [
              'Action',
              'Thriller',
              'Horror',
              'Comedy',
              "Romance"
            ],
          },
        ],
      });
      const genre = dbGenreData.get({ plain: true });
      res.render('genre', { genre, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one movie
router.get('/movie/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the movie
    try {
      const dbMovieData = await Movie.findByPk(req.params.id);

      const movie = dbMovieData.get({ plain: true });

      res.render('movie', { movie, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
