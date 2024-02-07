const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Save the session and set loggedIn to true
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(201).json(dbUserData); // Use 201 for resource creation
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      return res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    }

    // Save the session and set loggedIn to true
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
