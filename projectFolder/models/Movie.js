const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Genre = require("./Genre");

const Movie = sequelize.define('Movie', {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  movieName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

Movie.belongsTo(Genre);

module.exports = Movie;


