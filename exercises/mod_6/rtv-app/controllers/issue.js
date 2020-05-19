const Issue = require('../models/issue.js');

// CREATE an issue:
module.exports = {
createIssue : function(req, res, next) {
    const issue = new Issue(req.body);
    // console.log(req.body);
    issue.user = req.user._id;
    issue.createdBy = req.user.username;
    issue.save((err, doc) => {
        if (err) {
            console.log('Error, unable to save to database');
            res.status(500);
            return next(err);
        }
        return res.status(201).send(doc);
    });
},

// GET all issues:
allIssues : function(req, res, next) {
    Issue.find({}).exec((err, docs) => { 
    // console.log(docs);
        if (err) {
            console.log('Error')
            res.status(500);
            return next(err);
        }
        return res.status(200).send(docs);
    });
},

// GET issue details:
issueDetails : function(req, res, next) {
    Issue.findOne( { _id : req.params.issueId }, (err, doc) => {
        // console.log(doc);
        if (err) {
            console.log('Error');
            res.status(500);
            return next(err);
        }
        return res.status(200).send(doc);
    });
},

// GET current users issues:
currentUser : function(req, res, next) {
    Issue.find( { user : req.user._id }, (err, docs) => {
        if (err) {
            // console.log('Error');
            res.status(500);
            return next(err);
        } else if (!docs) {
            res.status(404);
            return next(new Error('Docs not found'));
        };
        return res.status(200).send(docs);
    });
},

// GET user issues:
userIssues : function(req, res, next) {
    Issue.find( { createdBy : req.params.username }, (err, docs) => {
        if (err) {
            // console.log('Error');
            res.status(500);
            return next(err);
        } else if (!docs) {
            res.status(404);
            return next(new Error('Docs not found'));
        };
        return res.status(200).send(docs);
    });
},

// UPDATE an issue: 
updateIssue : function(req, res, next) {
    Issue.findOneAndUpdate( { _id : req.params.issueId, user : req.user._id }, 
    { $set : req.body }, 
    { upsert : true, new : true },
    (err, updatedIssue) => {
        if (err) {
            // console.log('Error');
            res.status(500);
            return next(err);
        }
        return res.status(201).send( { success : true, message : 'Updated issue' + updatedIssue } );
    });
},

// DELETE an issue:
deleteIssue : function(req, res, next) {
    Issue.findOneAndDelete( { _id : req.params.issueId, user : req.user._id }, (err, deletedIssue) => {
        if (err) {
            // console.log('Error');
            res.status(500);
            return next(err);
        }
        return res.status(200).send( { success : true, message : 'Deleted post' + deletedIssue } );
    });
},

// UPVOTE
upvoteIssue : function(req, res, next) {
    Issue.findOne( { _id : req.params.issueId }, (err, issue) => {
        if (issue.usersWhoVoted.includes(req.user._id)) {
            // console.log('RESULTS', req.user)
            res.status(403);
            return next(new Error('You can only vote once per issue'));
        } else {
            Issue.findOneAndUpdate( { _id : req.params.issueId },
            { $inc : { votes : 1 }, $push : { usersWhoVoted : req.user._id } },
            { new : true }, (err, upvoted) => {
                if(err){
                    // console.log('Error');
                    res.status(500);
                    return next(err);
                }
                return res.status(201).send(upvoted);
            }
        )}
    })
},

// DOWNVOTE
downvoteIssue : function(req, res, next) {
    Issue.findOne( { _id : req.params.issueId }, (err, issue) => {
        if (issue.usersWhoVoted.includes(req.user._id)) {
            // console.log('RESULT', req.user)
            res.status(403);
            return next(new Error('You can only vote once per issue'));
        } else {
            Issue.findOneAndUpdate( { _id : req.params.issueId },
            { $inc : { votes : -1 }, $push : { usersWhoVoted : req.user._id } },
            { new : true }, (err, downvoted) => {
                if(err){
                    // console.log('Error');
                    res.status(500);
                    return next(err);
                }
                return res.status(201).send(downvoted);
                }
            )}
        })
    }    
};
