const router = require('express').Router();
const { Movie, Genre } = require("../../models/Movie");

// GET movies by genre
router.get('/movies/:genre', async (req, res, next) => {
    try {
        const genre = req.params.genre;

        // Find the genre by name
        const genreInstance = await Genre.findOne({ where: { genreName: genre } });

        if (!genreInstance) {
            return res.status(404).json({ error: 'Genre not found' });
        }

        // Find movies by genre id
        const movies = await Movie.findAll({
            where: { genre_id: genreInstance.id },
        });

        res.json(movies);
    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the next middleware
    }
});

// POST a new movie
router.post('/movies', async (req, res, next) => {
    try {
        const { movieName, genreName } = req.body;

        // Find the genre by name
        const genreInstance = await Genre.findOne({ where: { genreName } });

        if (!genreInstance) {
            return res.status(404).json({ error: 'Genre not found' });
        }

        // Create a new movie
        const newMovie = await Movie.create({
            movieName,
            genre_id: genreInstance.id,
        });

        res.status(201).json(newMovie);
    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the next middleware
    }
});

module.exports = router;
