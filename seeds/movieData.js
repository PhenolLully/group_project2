const { Movie } = require('../models');
const genreData = require("./genreData");

const movies = [
  { movieName: "The Matrix", genre_id: 1, filename: "the_matrix.jpg" },
  { movieName: "Spider-Man: No Way Home", genre_id: 1, filename: "spiderman-no-way-home.jpg" },
  { movieName: "Scarface", genre_id: 1, filename: "scarface.jpg" },
  { movieName: "Shutter Island", genre_id: 2, filename: "shutter-sland.jpg" },
  { movieName: "The Silence of The Lambs", genre_id: 2, filename: "the-silence-of-the-lambs.jpg" },
  { movieName: "Seven", genre_id: 2, filename: "seven.jpg" },
  { movieName: "The Exorcist", genre_id: 3, filename: "the-exorcist.jpg" },
  { movieName: "The Conjuring", genre_id: 3, filename: "the-conjuring.jpg" },
  { movieName: "A Quiet Place", genre_id: 3, filename: "a-quiet-place.jpg" },
  { movieName: "21 Jump Street", genre_id: 4, filename: "jumpstreet.jpg" },
  { movieName: "Friday", genre_id: 4, filename: "friday.jpg" },
  { movieName: "Rush Hour", genre_id: 4, filename: "rushhour.jpg" },
  { movieName: "Romeo & Juliet", genre_id: 5, filename: "romeo-juliet.jpg" },
  { movieName: "Love Jones", genre_id: 5, filename: "love-jones.jpg" },
  { movieName: "Pretty Woman", genre_id: 5, filename: "pretty-woman.jpg" },
];

const seedMovies = async () => {
    await Movie.bulkCreate(movies);
};

module.exports = seedMovies;