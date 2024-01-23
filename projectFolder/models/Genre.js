const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Genre = sequelize.define('Genre', {
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
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearReleased: {
    type: DataTypes.NUMBER,
      allowNull: false,
  }
});

module.exports = Genre;
