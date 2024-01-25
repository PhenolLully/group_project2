const router = require('express').Router();
const Movie = require("../../models/Movie")

router.get("/:genre",(req, res) =>{
    Movie.findAll({
        where:{
            genre: req.params.genre
        }
    })
});

// insert .then inside first get route
//











module.exports = router;