const sequelize = require('../config/connection');
const seedMovies = require('./movieData');
const seedGenre = require('./genreData');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedGenre(); 
    await seedMovies();
    process.exit(0);
  } catch (error) {
    console.error('Error syncing and seeding the database:', error);
    process.exit(1);
  }
};

seedAll();

