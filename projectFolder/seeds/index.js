const sequelize = require('../config/connection');
const seedMovies = require('./movieData');
const seedGenre = require('./genreData');

const seedAll = async () => {
  try {
    console.log('Syncing Sequelize models with the database...');
    await sequelize.sync({ force: false });
    console.log('Sync successful.');

    console.log('Seeding genres...');
    // await seedGenre(); // Seed genres first
    console.log('Genre seeding complete.');

    console.log('Seeding movies...');
    await seedMovies();
    console.log('Movie seeding complete.');

    console.log('Seed process completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
};

seedAll();
