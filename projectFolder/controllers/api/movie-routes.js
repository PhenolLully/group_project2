const router = require('express').Router();
const {Movie, Genre}= require("../../models/Movie")

// router.get("/:genre",(req, res) =>{
//     Movie.findAll({
//         where:{
//             genre: req.params.genre
//         }
//     })
// });

router.get('/movies/:genre', async (req, res) => {
    const genre = req.params.genre;


    Genre.findOne({ where: { genreName: genre } })
        .then(genreInstance => {
            if (!genreInstance) {
                return res.status(404).json({ error: 'Genre not found' });
            }


            return Movie.findAll({
                where: { genre_id: genreInstance.id },
            });
        })
        .then(movies => {
            res.json(movies);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

router.post('/movies', async (req, res) => {
    const { movieName, genreName } = req.body;

    // Find genre by name
    Genre.findOne({ where: { genreName } })
        .then(genreInstance => {
            if (!genreInstance) {
                return res.status(404).json({ error: 'Genre not found' });
            }
            return Movie.create({
                movieName,
                genre_id: genreInstance.id,
            });
        })
        .then(newMovie => {
            res.status(201).json(newMovie); 
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

module.exports = router;