const {Movie} = require('../models');

const movieData = [
    {
        movieName: "The Matrix",
        genre: "Action",
        yearReleased: 1999,
    },
    {
        movieName: "The Dark Knight",
        genre: "Action",
        yearReleased: 2008,
    },
    {
        movieName: "John Wick",
        genre: "Action",
        yearReleased: 2014,
    },
    {
        movieName: "Spider-Man: No Way Home",
        genre: "Action",
        yearReleased: 2021,
    },
    {
        movieName: "Scarface",
        genre: "Action",
        yearReleased: 1983,
    },
    {
        movieName: "Lights Out",
        genre: "Thriller",
        yearReleased: 2016,
    },
    {
        movieName: "The Girl On The Train" ,
        genre: "Thriller",
        yearReleased: 2016,
    },
    {
        movieName: "Shutter Island",
        genre: "Thriller",
        yearReleased: 2010,
    },
    {
        movieName: "The Silence of The Lambs",
        genre: "Thriller",
        yearReleased: 1991,
    },
    {
        movieName: "Seven",
        genre: "Thriller",
        yearReleased: 1995,
    },
    {
        movieName: "21 Jump Street",
        genre: "Comedy",
        yearReleased: 2012,
    },
    {
        movieName: "Scary Movie",
        genre: "Comedy",
        yearReleased: 2000,
    },
    {
        movieName: "Happy Gilmore",
        genre: "Comedy",
        yearReleased: 1996,
    },
    {
        movieName: "Friday",
        genre: "Comedy",
        yearReleased: 1995,
    },
    {
        movieName: "Dodgeball" ,
        genre: "Comedy",
        yearReleased: 2004,
    },
    {
        movieName: "Rush Hour",
        genre: "Horror",
        yearReleased: 1998,
    },
    {
        movieName: "The Exorcist" ,
        genre: "Horror",
        yearReleased: 1973 ,
    },
    {
        movieName: "The Blair Witch Project" ,
        genre: "Horror",
        yearReleased: 1999,
    },
    {
        movieName: "The Conjuring" ,
        genre: "Horror",
        yearReleased: 2013,
    },
    {
        movieName: "Bride of Chucky" ,
        genre: "Horror",
        yearReleased: 1998,
    },
    {
        movieName: "The Notebook",
        genre: "Romance",
        yearReleased: 2004,
    },
    {
        movieName: "Romeo & Juliet" ,
        genre: "Romance",
        yearReleased: 1996,
    },
    {
        movieName: "Love Jones" ,
        genre: "Romance",
        yearReleased: 1997,
    },
    {
        movieName: "Pretty Woman",
        genre: "Romance",
        yearReleased: 1990,
    },
    {
        movieName: "500 Days of Summer" ,
        genre: "Romance",
        yearReleased: 2009 ,
    },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;