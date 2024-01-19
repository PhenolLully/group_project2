const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Movie = require("./Movie");

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { Movie };
