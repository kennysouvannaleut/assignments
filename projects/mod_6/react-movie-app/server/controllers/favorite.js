const { Favorite } = require('../models/favorite');

exports.ratedMovies = function(req, res) {
    Favorite.find({ 'movieId': req.body.movieId })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results: favorite.length
            })
        })
    };

exports.movies = function(req, res) {
    Favorite.find({
        'movieId': req.body.movieId,
        'userInfo': req.body.userInfo
    })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err);

            let result = false;
                if (favorite.length !== 0) {
                    result = true
                }
            return res.status(200).send({
                success: true,
                result, 
                favorite
            });
        })
    }

exports.favorite = function(req, res) {
    const favorite = new Favorite(req.body);

    favorite.save((err, doc) => {
        if (err) return res.send({
            success: false,
            error: err
        });
        return res.status(200).send({
            success: true,
            doc
        });
    })
};

exports.deleteRating = function(req, res) {
    Favorite.findOneAndDelete({
        'movieId': req.body.movieId,
        'userInfo': req.body.userInfo
    })
        .exec((err, deleted) => {
            if (err) return res.status(400).send({
                success: false,
                error: err
            });
            return res.status(200).send({
                success: true,
                deleted
            });
        })
    };

exports.lists = function(req, res) {
    Favorite.find({ 'userInfo': req.body.userInfo })
        .exec((err, results) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results
            });
        })
    };
