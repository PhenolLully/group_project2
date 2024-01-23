const {Genre} = require('../models');

const genreData = ["Action, Thriller, Horror, Comedy, Romance"];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;