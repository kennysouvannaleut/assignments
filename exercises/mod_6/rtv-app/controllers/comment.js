const Comment = require('../models/comment.js');

// CREATE comment:
module.exports = { newComment : function(req, res, next) {
    req.body.issue = req.params.issueId;
    req.body.user = req.user._id;  
    req.body.createdBy = req.user.username;
    const newComment = new Comment(req.body);
    // console.log(req.body)
    newComment.save((err, doc) => {
        if (err) {
            console.log('Error');
            res.status(500);
            return next(err);
        }
        return res.status(201).send(doc)
    });
},

// GET comments:
allComments : function(req, res, next) {
    Comment.find( { issue : req.params.issueId }, (err, docs) => {
            if (err) {
                // console.log('Error');
                res.status(500);
                return next(err);
            };
            return res.status(200).send(docs);
    });
},

// DELETE comment:
deleteComment : function(req, res, next) {
    Comment.findOneAndDelete( { _id : req.params.commentId, user : req.user._id }, (err, deleted) => {
        if (err) {
            // console.log('Error');    
            res.status(500);
            return next(err);
        };
        return res.status(200).send({
            message : `User comment deleted.`,
            type : 'Success',
            deleted
        });
    });
},

// UPDATE comment:
updateComment : function(req, res, next) {
    Comment.findOneAndUpdate({ _id : req.params.commentId, user : req.user._id }, 
    { $set : req.body }, { upsert : true, new : true }, (err, updated) => {
        if (err) {
            // console.log('Error');
            res.status(500);
            return next(err);
        };
        return res.status(201).send({
            message : `User comment updated.`,
            type : 'Success',
            updated
        });
    });
}};
