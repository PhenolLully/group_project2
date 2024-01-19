const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const sequelize = require('./config/database'); // Set up your Sequelize connection
const routes = require('./routes');
const middleware = require('./middleware/logger'); // Import your middleware

dotenv.config();

const app = express();

app.use(middleware.logRequest); // Use the logger middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
