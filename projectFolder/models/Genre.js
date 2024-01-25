const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Movie = require("./Movie");
const User = require("./User");

class Genre extends Model {}

Genre.init(
  {
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
  },
  {
    sequelize, // Pass the Sequelize instance here
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'genre',
  }
);

module.exports = Genre;
