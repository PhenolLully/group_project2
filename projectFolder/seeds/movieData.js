const { Movie } = require('../models');
const genreData = require("./genreData");
const movies = [
  { movieName: "The Matrix", genre_id: 1, filename: "the_matrix.jpg" },
  { movieName: "The Dark Knight", genre_id: 1, filename: "dark-knight.jpg" },
  { movieName: "John Wick", genre_id: 1, filename: "john-wick.jpg" },
  { movieName: "Spider-Man: No Way Home", genre_id: 1, filename: "spiderman-no-way-home.jpg" },
  { movieName: "Scarface", genre_id: 1, filename: "scarface.webp" },
  { movieName: "Lights Out", genre_id: 2, filename: "lights-out.jpg" },
  { movieName: "The Girl On The Train", genre_id: 2, filename: "girl-on-the-train.jpg" },
  { movieName: "Shutter Island", genre_id: 2, filename: "shutter-sland.jpg" },
  { movieName: "The Silence of The Lambs", genre_id: 2, filename: "the-silence-of-the-lambs.jpg" },
  { movieName: "Seven", genre_id: 2, filename: "seven.jpg" },
  { movieName: "The Exorcist", genre_id: 3, filename: "the-exorcist.jpg" },
  { movieName: "The Blair Witch Project", genre_id: 3, filename: "blair-witch.jpg" },
  { movieName: "The Conjuring", genre_id: 3, filename: "the-conjuring.jpg" },
  { movieName: "Bride of Chucky", genre_id: 3, filename: "chucky.jpg" },
  { movieName: "A Quiet Place", genre_id: 3, filename: "a-quiet-place.jpg" },
  { movieName: "21 Jump Street", genre_id: 4, filename: "21-jump-street.jpg" },
  { movieName: "Scary Movie", genre_id: 4, filename: "scary-movie.jpg" },
  { movieName: "Happy Gilmore", genre_id: 4, filename: "happy-gilmore.jpg" },
  { movieName: "Friday", genre_id: 4, filename: "friday.jpg" },
  { movieName: "Rush Hour", genre_id: 4, filename: "rush-hour.webp" },
  { movieName: "The Notebook", genre_id: 5, filename: "notebook.jpg" },
  { movieName: "Romeo & Juliet", genre_id: 5, filename: "romeo-juliet.jpg" },
  { movieName: "Love Jones", genre_id: 5, filename: "love-jones.jpg" },
  { movieName: "Pretty Woman", genre_id: 5, filename: "pretty-woman.jpg" },
  { movieName: "500 Days of Summer", genre_id: 5, filename: "500-days-of-summer.jpg" }
];
const seedMovies = async () => {
    await Movie.bulkCreate(movies);
};
module.exports = seedMovies;