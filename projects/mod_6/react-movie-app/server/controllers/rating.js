const { Like } = require('../models/like');
const { Dislike } = require('../models/dislike');

exports.likes = function(req, res) {
    let options = {}

        if (req.body.videoId) {
            options = { videoId: req.body.videoId }
        } else {
            options = { discussionId: req.body.discussionId }
        }

    Like.find(options)
        .exec((err, ratings) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results: ratings
            });
        });
    };

exports.dislikes = function(req, res) {
    let options = {}

        if (req.body.videoId) {
            options = { videoId: req.body.videoId }
        } else {
            options = { discussionId: req.body.discussionId }
        }

    Dislike.find(options)
        .exec((err, ratings) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results: ratings
            });
        })
    };

exports.upvote = function(req, res) {
    let options = {};

        if (req.body.videoId) {
            options = {
                videoId: req.body.videoId,
                userId: req.body.userId
            }
        } else {
            options = {
                discussionId: req.body.discussionId,
                userId: req.body.userId
            }
        }

    const like = new Like(options);
        like.save((err, ratings) => {
            if (err) return res.status(400).send({
                success: false,
                error: err
            });

        Dislike.findOneAndDelete(options)
            .exec((err, ratings) => {
                if (err) return res.status(400).send({
                    success: false,
                    error: err
                })
                return res.status(200).send({ success: true })
            })
        })
    };

exports.downvote = function(req, res) {
    let options = {};

        if (req.body.videoId) {
            options = {
                videoId: req.body.videoId,
                userId: req.body.userId
            }
        } else {
            options = {
                discussionId: req.body.discussionId,
                userId: req.body.userId
            }
        }

    const dislike = new Dislike(options);
        dislike.save((err, ratings) => {
            if (err) return res.status(400).send({
                success: false,
                error: err
            });

        Like.findOneAndDelete(options)
            .exec((err, ratings) => {
                if (err) return res.status(400).send({
                    success: false,
                    error: err
                })
                return res.status(200).send({ success: true })
            });
        })
    };

exports.unLike = function(req, res) {
    let options = {};

        if (req.body.videoId) {
            options = {
                videoId: req.body.videoId,
                userId: req.body.userId
            }
        } else {
            options = {
                discussionId: req.body.discussionId,
                userId: req.body.userId
            }
        }

    Dislike.findOneAndDelete(options)
        .exec((err, ratings) => {
            if (err) return res.status(400).send({
                success: false,
                error: err
            });
            return res.status(200).send({ 
                success: true,
                results: ratings
            })
        })
    };

exports.unDislike = function(req, res) {
    let options = {};

        if (req.body.videoId) {
            options = {
                videoId: req.body.videoId,
                userId: req.body.userId
            }
        } else {
            options = {
                discussionId: req.body.discussionId,
                userId: req.body.userId
            }
        }

    Like.findOneAndDelete(options)
        .exec((err, ratings) => {
            if (err) return res.status(400).send({
                success: false,
                error: err
            });
            return res.status(200).send({ 
                success: true,
                results: ratings
            })
        })
    };
