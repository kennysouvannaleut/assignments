const express = require('express');
const postRouter = express.Router();
const Post = require('../models/post');

postRouter.get('/:userID', (req, res, next) => {
    Post.find( 
        { user: req.params.userID }, 
        (err, posts) => {
        if(err) {
            res.status(500);
            return next(err);
        } else if(!posts) {
            res.status(404);
            return next(new Error('No active posts.'));
        }
        return res.status(200).send(posts);
    });
});

postRouter.route('/:postID')
    .get((req, res, next) => {
        Post.findOne( 
            { 
            _id: req.params.postID,
            user: req.user._id
            }, 
            (err, post) => {
            if(err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(post);
         })
    })
    .put((req, res, next) => {
        Post.findOneAndUpdate( 
            { 
            _id: req.params.postID,
            user: req.user._id
            },
            req.body,
            { new: true },
            (err, updatePost) => {
            if(err) {
                console.log('Error');
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatePost); 
            })
    })
    .delete((req, res, next) => {
        Post.findOneAndRemove( 
            {
            _id: req.params.postID,
            user: req.user._id
            }, 
            (err, removePost) => {
            if(err) {
                res.status(500);        
                return next(err);
            }
            return res.status(200).send(removePost);
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
        const newPost = new Post(req.body);
        console.log(newPost);
        newPost.user = req.user._id
        newPost.save((err, savedPost) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(savedPost);
        }
    )
 });

module.exports = postRouter;