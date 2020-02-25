const express = require("express");
const movieRouter = express.Router();
const uuid = require("uuid/v4");

// FAKE DATA
const movies = [
    { title: "die hard", genre: "action", _id: uuid() },
    { title: "star wars IV", genre: "fantasy", _id: uuid() },
    { title: "lion king", genre: "fantasy", _id_: uuid() },
    { title: "friday the 13th", genre: "horror", _id: uuid() }
];

// GET ALL
movieRouter.get("/", (req, res) => {
    res.send(movies)
});

// GET BY GENRE
movieRouter.get("search/genre", (req, res) => {
    // console.log(req.query)
    const genre = req.query.genre;
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
});

// GET ONE
movieRouter.get("/:movieId", (req, res) => {
    // console.log(req.params)
    const movieId = req.params.movieId;
    const foundMovie = movies.find(movie => movie._id === movieId) 
    res.send(foundMovie)
});

// POST ONE    
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database!`)
});

// UPDATE ONE
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    const updateObject = req.body;
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], updateObject)
    res.send(updatedMovie)
});

// DELETE ONE
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Succssfully deleted movie!")
});

module.exports = movieRouter;