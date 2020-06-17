const { Favorite } = require('../models/favorite');

exports.showFavorites = function(req, res) {
    Favorite.find({ 'movieId': req.body.movieId })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results: favorites.length
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
                results: result
            });
        })
    };

exports.favorited = function(req, res) {
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

exports.delete = function(req, res) {
    Favorite.findOneAndDelete({
        'movieId': req.body.movieId,
        'userInfo': req.body.userInfo
    })
        .exec((err, doc) => {
            if (err) return res.status(400).send({
                success: false,
                error: err
            });
            return res.status(200).send({
                success: true,
                doc
            });
        })
    };

exports.list = function(req, res) {
    Favorite.find({ 'userInfo': req.body.userInfo })
        .exec((err, results) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results
            });
        })
    };
