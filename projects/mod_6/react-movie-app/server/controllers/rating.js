const { Like } = require('../models/like');
const { Dislike } = require('../models/dislike');

exports.getLikes = function(req, res) {

    let options = {};

        if (req.body.videoId) {
            options = { videoId: req.body.videoId }
        } else {
            options = { commentId: req.body.commentId }
        }

    Like.find(options)
        .exec((err, results) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results
            });
        });
    };


exports.getDislikes = function(req, res) {

    let options = {};

        if (req.body.videoId) {
            options = { videoId: req.body.videoId }
        } else {
            options = { commentId: req.body.commentId }
        }

    Dislike.find(options)
        .exec((err, results) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results
            });
        })
    };


exports.like = function(req, res) {
    
    let options = {};

        if (req.body.videoId) {
            options = {
                videoId: req.body.videoId,
                userId: req.body.userId
            }
        } else {
            options = {
                commentId: req.body.commentId,
                userId: req.body.userId
            }
        }

    const like = new Like(options);
        like.save((err, doc) => {
            if (err) return res.status(400).send({
                success: false,
                error: err
            });

        Dislike.findOneAndDelete(options)
            .exec((err, results) => {
                if (err) return res.status(400).send({
                    success: false,
                    error: err
                })
                return res.status(200).send({ success: true })
            })
        })
    };


exports.dislike = function(req, res) {

    let options = {};

        if (req.body.videoId) {
            options = {
                videoId: req.body.videoId,
                userId: req.body.userId
            }
        } else {
            options = {
                commentId: req.body.commentId,
                userId: req.body.userId
            }
        }

    const dislike = new Dislike(options);
        dislike.save((err, doc) => {
            if (err) return res.status(400).send({
                success: false,
                error: err
            });

        Like.findOneAndDelete(options)
            .exec((err, results) => {
                if (err) return res.status(400).send({
                    success: false,
                    error: err
                })
                return res.status(200).send({ success: true })
            });
        })
    };
