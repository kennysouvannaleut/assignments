const express = require("express");
const movieRouter = express.Router();
const uuid = require("uuid/v4");

const movies = [
    { title: "die hard", genre: "action", id_: uuid() },
    { title: "star wars IV", genre: "fantasy", id_: uuid() },
    { title: "lion king", genre: "fantasy", _id_: uuid() },
    { title: "friday the 13th", genre: "horror", _id: uuid() }
]

// movieRouter.get("/", (req, res) => {
//     res.send(movies)
// })
    
// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuid()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie.title} to the database!`)
// })

movieRouter.route("/")
    .get("/", (req, res) => {
        res.send(movies)
    })
    .post("/", (req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.send(`Successfully added ${newMovie.title} to the database!`)
    })

module.exports = movieRouter;