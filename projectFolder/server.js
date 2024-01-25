const path = require('path');

const express = require('express');

const session = require('express-session');

const exphbs = require('express-handlebars');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');

const sequelize = require('./config/connection');

const helpers = require('./utils/helpers');

const app = express();

const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET || 'Super secret secret', // Use environment variable
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json()); // Use built-in express.json() for JSON parsing

app.use(express.urlencoded({ extended: true })); // Use built-in express.urlencoded() for URL-encoded data

app.engine('handlebars', exphbs({ helpers })); // Simplified Handlebars configuration

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});