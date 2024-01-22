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
 secret: 'Super secret secret',
 cookie: {},
 resave: false,
 saveUninitialized: true,
 store: new SequelizeStore({
   db: sequelize,
 }),
};


app.use(session(sess));


const hbs = exphbs.create({ helpers });


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
 const data = {
     pageTitle: 'Handlebars Website',
     headerTitle: 'Welcome to Handlebars!',
     mainContent: 'This is the main content of the page.',
     footerText: '© 2023 Your Company',
 };


 res.render('index', data);
});


// Start the server
const serverPORT = process.env.serverPORT || 3001;
app.listen(serverPORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);


sequelize.sync({ force: false }).then(() => {
 app.listen(PORT, () => console.log('Now listening'));
});

