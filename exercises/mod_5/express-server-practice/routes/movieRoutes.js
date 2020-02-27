const express = require("express");
const movieRoutes = express.Router();
const Movie = require("../models/movie");

// GET ALL
movieRoutes.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        };
        return res.status(200).send(movies)
    })
});

// POST ONE    
movieRoutes.post("/", (req, res, next) => {   /* creating a new instance of a movie */
    const newMovie = new Movie(req.body);
    newMovie.save((err, saveMovie) => {
        if(err) {
            res.status(500)
            return next(err) 
        };
        return res.status(201).send(saveMovie);
    })
});

// DELETE ONE
movieRoutes.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        };
        // const response = {
        //     messsage: "Movie successfully deleted",
        //     id: movieId._id
        // }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    })
});

// UPDATE ONE
movieRoutes.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId }, // find this one to update
        req.body, // update the object with this data
        { new: true }, // send back the updated version please
        (err, updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(201).send(updatedMovie);
        }
    )
});

// GET BY GENRE
movieRoutes.get("search/genre", (req, res, next) => {
    Movie.find({ genre: req.query.genre }, (err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        };
        return res.status(200).send(movies)
    })
});

// GET ONE
movieRoutes.get("/:movieId", (req, res, next) => {  
    /*  if nothing is found, the data parameter is "null" */
    Movie.findOne({ _id: req.params.movieId }, (err, foundMovie) => {
        if(err) {
            res.status(500)
            return next(err)
        };
        return res.status(200).send(foundMovie)
    })
});

module.exports = movieRoutes;
