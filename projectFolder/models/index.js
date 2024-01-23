const User = require('./User');
const Movie = require("./Movie");
const Genre = require("./Genre")

User.belongsTo(Genre, {through: "UserGenre"});
Genre.hasOne(User);

Genre.hasOne(Movie);

Movie.belongsTo(Genre, {through: "UserGenre" });

module.exports = { User, Movie, Genre };
