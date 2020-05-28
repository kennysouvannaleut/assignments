const { Discussion } = require('../models/discussion');

exports.new = function(req, res) {
    const discussion = new Discussion(req.body);

    discussion.save((err, discussion) => {
        if (err) return res.send({
            success: false,
            error: err
        });
        
        Discussion.find({ '_id': discussion._id })
            .populate('by')
            .exec((err, results) => {
                if (err) return res.send({
                    success: false,
                    error: err
                });
                return res.status(200).send({
                    success: true,
                    doc: results
                })
            })
        })
    }

exports.all = function(req, res) {
    Discussion.find({ 'postId': req.body.movieId })
        .populate('by')
        .exec((err, discussions) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send({
                success: true,
                results: discussions
            })
        })
    }
