const express = require('express');
const postRouter = express.Router();
const Post = require('../models/post');

postRouter.get('/:userID', (req, res, next) => {
    Post.find( {
        user: req.params.userID
    }, (err, post) => {
        if(err) {
            res.status(500);
            return next(err);
        } else if(!post) {
            res.status(404);
            return next(new Error('No active post found.'));
        }
        return res.status(200).send(post);
    });
});

postRouter.route('/:postID')
    .get((req, res, next) => {
        Post.findOne( { 
            _id: req.params.postID,
            user: req.user._id
        }, (err, post) => {
            if(err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(post);
         })
    })
    .put((req, res, next) => {
        Post.findOneAndUpdate( { 
            _id: req.params.postID,
            user: req.user._id
        },
        req.body,
        { new: true },
        (err, post) => {
            if(err) {
                console.log('Error');
                res.status(500);
                return next(err);
            }
            return res.status(201).send(post); 
        })
    })
    .delete('/:postID', (req, res, next) => {
        Post.findOneAndRemove( {
            _id: req.params.postID,
            user: req.user._id
        }, (err, post) => {
            if(err) {
                res.status(500);        
                return next(err);
            }
            return res.status(200).send(post);
        }
    )
});

postRouter.route('/')
    .get((req, res, next) => {
        Post.find({}, (err, posts) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(posts);
        })
    })
    .post((req, res, next) => {
        const post = new Post(req.body);
        console.log(post);
        post.user = req.user._id
        post.save((err, newPost) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(newPost);
        }
    )
 });

module.exports = postRouter;