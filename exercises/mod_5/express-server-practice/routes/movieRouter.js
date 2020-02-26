const express = require("express");
const movieRouter = express.Router();
const uuid = require("uuid/v4");

// FAKE DATA
const movies = [
    { 
        title: "die hard", 
        genre: "action", 
        _id: uuid() 
    },
    { 
        title: "star wars IV", 
        genre: "fantasy", 
        _id: uuid() 
    },
    { 
        title: "lion king", 
        genre: "fantasy", 
        _id: uuid() 
    },
    { 
        title: "friday the 13th", 
        genre: "horror", 
        _id: uuid() 
    }
];

// GET ALL
movieRouter.get("/", (req, res) => {    /* get a list of movies */
    res.status(200)
    res.send(movies)
});

// GET BY GENRE
movieRouter.get("search/genre", (req, res) => {
    // console.log(req.query);
    const genre = req.query.genre;
    if(!genre) {
        const error = new Error("YOU MUST PROVIDE A GENRE.");
        res.status(500);
        return next(error);
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    res.status(200).send(filteredMovies)
});

// GET ONE
movieRouter.get("/:movieId", (req, res, next) => {
    // console.log(req.params);
    const movieId = req.params.movieId;
    const foundMovie = movies.find(movie => movie._id === movieId);
    // console.log(foundMovie);
    if(!foundMovie)  {
        const error = new Error(`THE ITEM WITH ID ${movieId} WAS NOT FOUND.`);
        res.status(500)
        return next(error);
    }
    res.status(200).res.send(foundMovie)
});

// POST ONE    
movieRouter.post("/", (req, res) => {   /* creating a new instance of a movie */
    const newMovie = req.body;
    newMovie._id = uuid();
    movies.push(newMovie);
    res.status(201).send(`Successfully added ${newMovie.title} to the database!`)
});

// UPDATE ONE
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    const updateObject = req.body;
    const movieIndex = movies.findIndex(movie => movie._id === movieId);
    const updatedMovie = Object.assign(movies[movieIndex], updateObject);
    res.status(201).res.send(updatedMovie)
});

// DELETE ONE
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    const movieIndex = movies.findIndex(movie => movie._id === movieId);
    movies.splice(movieIndex, 1);
    res.send("Succssfully deleted movie!")
});

module.exports = movieRouter;

// app.use((req, res, next) => {
//     console.log("THIS LINE IS CALLED FOR EVERY SINGLE REQUEST INTO THIS SERVER, NO MATTER TO WHICH ENDPOINT")
//     next();
// });

// app.use("/items", (req, res, next) => {
//     req.body = {name: "Rick"}
//     next();
// });

// app.get("/items", (req, res, next) => {
//     console.log("GET REQUEST RECEVIED");
//     res.send(req.body)
// });
