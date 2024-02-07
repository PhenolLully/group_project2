const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Genre = require('./Genre');
class Movie extends Model {}
Movie.init(
  {
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
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'genre',
        key: 'id',
      },
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);
module.exports = Movie;