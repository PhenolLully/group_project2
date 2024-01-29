const { Movie } = require('../models');
const genreData = require("./genreData");

const movies = [
  { movie_name: "The Matrix", genre_id: 1 },
  { movie_name: "The Dark Knight", genre_id: 1 },
  { movie_name: "John Wick", genre_id: 1 },
  { movie_name: "Spider-Man: No Way Home", genre_id: 1 },
  { movie_name: "Scarface", genre_id: 1 },
  { movie_name: "Lights Out", genre_id: 2 },
  { movie_name: "The Girl On The Train", genre_id: 2 },
  { movie_name: "Shutter Island", genre_id: 2 },
  { movie_name: "The Silence of The Lambs", genre_id: 2 },
  { movie_name: "Seven", genre_id: 2 },
  { movie_name: "The Exorcist", genre_id: 3 },
  { movie_name: "The Blair Witch Project", genre_id: 3 },
  { movie_name: "The Conjuring", genre_id: 3 },
  { movie_name: "Bride of Chucky", genre_id: 3 },
  { movie_name: "A Quiet Place", genre_id: 3 },
  { movie_name: "21 Jump Street", genre_id: 4 },
  { movie_name: "Scary Movie", genre_id: 4 },
  { movie_name: "Happy Gilmore", genre_id: 4 },
  { movie_name: "Friday", genre_id: 4 },
  { movie_name: "Rush Hour", genre_id: 4 },
  { movie_name: "The Notebook", genre_id: 5 },
  { movie_name: "Romeo & Juliet", genre_id: 5 },
  { movie_name: "Love Jones", genre_id: 5 },
  { movie_name: "Pretty Woman", genre_id: 5 },
  { movie_name: "500 Days of Summer", genre_id: 5 }
];

const seedMovies = async () => {
  await Movie.bulkCreate(movies);
};

module.exports = seedMovies;
