const express = require('express');
const publicRouter = express.Router();
const Post = require('../models/post');

publicRouter.get('/', (req, res, next) => {
        Post.find({}, (err, allPosts) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(200).send(allPosts);
        })
    });

module.exports = publicRouter;