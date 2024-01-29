const {Movie} = require('../models');
const genreData = require("./genreData");

const movies = [
  { movieName: "The Matrix", genre_id: 1 },
  { movieName: "The Dark Knight", genre_id: 1 },
  { movieName: "John Wick", genre_id: 1 },
  { movieName: "Spider-Man: No Way Home", genre_id: 1 },
  { movieName: "Scarface", genre_id: 1 },
  { movieName: "Lights Out", genre_id: 2 },
  { movieName: "The Girl On The Train", genre_id: 2 },
  { movieName: "Shutter Island", genre_id: 2 },
  { movieName: "The Silence of The Lambs", genre_id: 2 },
  { movieName: "Seven", genre_id: 2 },
  { movieName: "The Exorcist", genre_id: 3 },
  { movieName: "The Blair Witch Project", genre_id: 3 },
  { movieName: "The Conjuring", genre_id: 3 },
  { movieName: "Bride of Chucky", genre_id: 3 },
  { movieName: "A Quiet Place", genre_id: 3 },
  { movieName: "21 Jump Street", genre_id: 4 },
  { movieName: "Scary Movie", genre_id: 4 },
  { movieName: "Happy Gilmore", genre_id: 4 },
  { movieName: "Friday", genre_id: 4 },
  { movieName: "Rush Hour", genre_id: 4 },
  { movieName: "The Notebook", genre_id: 5 },
  { movieName: "Romeo & Juliet", genre_id: 5 },
  { movieName: "Love Jones", genre_id: 5 },
  { movieName: "Pretty Woman", genre_id: 5 },
  { movieName: "500 Days of Summer", genre_id: 5 }
];

const seedMovies = async () => {
    await Movie.bulkCreate(movies);
};

module.exports = seedMovies;