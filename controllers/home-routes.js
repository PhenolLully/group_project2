const router = require('express').Router();
const { Genre, Movie } = require('../models');
const withAuth = require('../utils/auth');


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


router.get('/genre/:id', async (req, res) => {
  try {
    const dbGenreData = await Genre.findByPk(req.params.id, {
      include: [
        {
          model: Movie,
          attributes: ['title',] 
        },
      ],
    });

    if (!dbGenreData) {
      res.status(404).render('404'); 
      return;
    }

    const genre = dbGenreData.get({ plain: true });
    res.render('genre', { ...genre, 
    loggedIn: req.session.loggedIn 
  });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.get('/movie', withAuth, async (req, res) => {
  try {
   
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Genre }],
    });

    const movie = userData.get({ plain: true });

    res.render('genre', 
    { ...movie, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
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
