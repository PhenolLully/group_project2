const User = require("./User");
const Movie = require("./Movie");
const Genre = require("./Genre")

User.hasMany(Movie, {
    foreignKey: "movie_id"
  });
  
Movie.belongsTo(Genre, {
    foreignKey: 'genre_id'
  });

Genre.hasOne(User, {
    foreignKey: "user_id"
  });

Genre.hasOne(Movie, {
    foreignKey: "movie_id"
});

module.exports = { User, Movie, Genre };