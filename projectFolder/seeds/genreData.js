const {Genre} = require('../models');

const genreData = [
    {
        genre: "Action",
    },
    {
        genre: "Thriller",
    },
    {
        genre: "Comedy",
    },
    {
        genre: "Horror",
    },
    {
        genre: "Romance",
    }
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;