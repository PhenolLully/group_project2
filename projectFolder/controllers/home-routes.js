const router = require('express').Router();
const { Genre, Movie } = require('../models');
const withAuth = require('../utils/auth');

// GET all genres for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const dbGenreData = await Genre.findAll();

    const genres = dbGenreData.map((genre) =>
      genre.get({ plain: true })
    );

    res.render('homepage', {
      genres,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET one genre
router.get('/genre/:id', async (req, res) => {
  try {
    const dbGenreData = await Genre.findByPk(req.params.id, {
      include: [
        {
          model: Movie,
          attributes: ['id', 'title', 'release_date', 'genre_id'], // Include only necessary attributes
        },
      ],
    });

    if (!dbGenreData) {
      res.status(404).render('404'); // Genre not found
      return;
    }

    const genre = dbGenreData.get({ plain: true });
    res.render('genre', { genre, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET one movie
router.get('/movie/:id', async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id);

    if (!dbMovieData) {
      res.status(404).render('404'); // Movie not found
      return;
    }

    const movie = dbMovieData.get({ plain: true });
    res.render('movie', { movie, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
