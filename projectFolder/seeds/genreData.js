const {Genre} = require('../models');

const genreData = [
{genre: "Action" },
{genre: "Thriller" },
{genre: "Horror" },
{genre: "Comedy" },
{genre: "Romance" },

];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;