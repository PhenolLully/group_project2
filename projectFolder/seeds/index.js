const sequelize = require('../config/connection');
const seedMovies = require("./movieData")
const seedGenre = require("./genreData")

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMovies();

  await seedGenre();

  process.exit(0);
};

seedAll();
