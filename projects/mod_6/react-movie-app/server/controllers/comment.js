const { Comment } = require('../models/comment');

exports.comment = function(req, res) {
    const comment = new Comment(req.body);

    comment.save((err, doc) => {
        console.error('ERROR:', err);
        if (err) return res.send({
            success: false,
            error: err
        });
        
        Comment.find({ '_id': comment._id })
            .populate('createdBy')
            .exec((err, results) => {
                if (err) return res.send({
                    success: false,
                    error: err
                });
                return res.status(200).send({
                    success: true,
                    results
                })
            })
        })
    };

exports.getComments = function(req, res) {
    Comment.find({ 'postId': req.body.movieId })
        .populate('createdBy')
        .exec((err, results) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results
            })
        })
    };
    