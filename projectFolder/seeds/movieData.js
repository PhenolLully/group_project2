const {Movie} = require('../models');


const genre = require("./genreData");

const movieData = {
    Action: ["The Matrix","The Dark Knight","John Wick" ,"Spider-Man: No Way Home" ,"Scarface"],
    Thriller: ["Lights Out","The Girl On The Train","Shutter Island","The Silence of The Lambs","Seven"],
    Comedy: ["21 Jump Street","Scary Movie","Happy Gilmore","Friday","Rush Hour" ],
    Horror: ["The Exorcist","The Blair Witch Project","The Conjuring","Bride of Chucky", "A Quiet Place"],
    Romance: ["The Notebook", "Romeo & Juliet","Love Jones","Pretty Woman","500 Days of Summer"]
}


// const movieData = [
//     {
//         movieName: "The Matrix",
//         yearReleased: 1999,
//     },
//     {
//         movieName: "The Dark Knight",
//         yearReleased: 2008,
//     },
//     {
//         movieName: "John Wick",
//         yearReleased: 2014,
//     },
//     {
//         movieName: "Spider-Man: No Way Home",
//         yearReleased: 2021,
//     },
//     {
//         movieName: "Scarface",
//         yearReleased: 1983,
//     },
//     {
//         movieName: "Lights Out",
//         yearReleased: 2016,
//     },
//     {
//         movieName: "The Girl On The Train" ,
//         yearReleased: 2016,
//     },
//     {
//         movieName: "Shutter Island",
//         yearReleased: 2010,
//     },
//     {
//         movieName: "The Silence of The Lambs",
//         yearReleased: 1991,
//     },
//     {
//         movieName: "Seven",
//         yearReleased: 1995,
//     },
//     {
//         movieName: "21 Jump Street",
//         yearReleased: 2012,
//     },
//     {
//         movieName: "Scary Movie",
//         yearReleased: 2000,
//     },
//     {
//         movieName: "Happy Gilmore",
//         yearReleased: 1996,
//     },
//     {
//         movieName: "Friday",
//         yearReleased: 1995,
//     },
//     {
//         movieName: "Dodgeball" ,
//         yearReleased: 2004,
//     },
//     {
//         movieName: "Rush Hour",
//         yearReleased: 1998,
//     },
//     {
//         movieName: "The Exorcist" ,
//         yearReleased: 1973 ,
//     },
//     {
//         movieName: "The Blair Witch Project" ,
//         yearReleased: 1999,
//     },
//     {
//         movieName: "The Conjuring",
//         yearReleased: 2013,
//     },
//     {
//         movieName: "Bride of Chucky" ,
//         yearReleased: 1998,
//     },
//     {
//         movieName: "The Notebook",
//         yearReleased: 2004,
//     },
//     {
//         movieName: "Romeo & Juliet" ,
//         yearReleased: 1996,
//     },
//     {
//         movieName: "Love Jones" ,
//         yearReleased: 1997,
//     },
//     {
//         movieName: "Pretty Woman",
//         yearReleased: 1990,
//     },
//     {
//         movieName: "500 Days of Summer" ,
//         yearReleased: 2009 ,
//     },
// ];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;