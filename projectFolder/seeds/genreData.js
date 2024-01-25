const {Genre} = require('../models');

const genreData = [
{genre: "Action", id: 1 },
{genre: "Thriller", id: 2 },
{genre: "Horror", id: 3 },
{genre: "Comedy", id: 4 },
{genre: "Romance", id: 5 },

];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;