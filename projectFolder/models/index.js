const User = require('./User');
const Movie = require('./Movie');
const Genre = require('./Genre');

Genre.hasMany(Movie, {
  foreignKey: 'genre_id',
});

Movie.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

module.exports = { User, Movie, Genre };
