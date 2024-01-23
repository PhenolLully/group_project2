const {Movie} = require('../models');
const genreData = require("./genreData");

const movieData = {
    Action: ["The Matrix","The Dark Knight","John Wick" ,"Spider-Man: No Way Home" ,"Scarface"],
    Thriller: ["Lights Out","The Girl On The Train","Shutter Island","The Silence of The Lambs","Seven"],
    Comedy: ["21 Jump Street","Scary Movie","Happy Gilmore","Friday","Rush Hour" ],
    Horror: ["The Exorcist","The Blair Witch Project","The Conjuring","Bride of Chucky", "A Quiet Place"],
    Romance: ["The Notebook", "Romeo & Juliet","Love Jones","Pretty Woman","500 Days of Summer"]
}

const seedMovies = async () => Movie.bulkCreate(movieData);{
    for (const [genre, movies] of Object.entries(genreData)) {
      for (const movieName of movies) {
        await Movie.create({
          movieName: movieName,
          genre: genre,
          // Add yearReleased if it's available in your original data
        });
      }
    }
  };
  module.exports = seedMovies;



// const seedMovies = () => Movie.bulkCreate(movieData);

// module.exports = seedMovies;