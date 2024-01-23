const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Movie = require("./Movie");
const User = require("./User");

const Genre = sequelize.define('Genre', {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

module.exports = Genre;
