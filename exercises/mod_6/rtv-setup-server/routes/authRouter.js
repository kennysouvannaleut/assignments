const express = require('express');
const authRouter = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

authRouter.route('/signup')
    .post((req, res, next) => {
        User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, existingUser) => {
            if(err) {
                res.status(500);
                return next(err);
            }
            if(existingUser) {
                res.status(403);
                return next(new Error('Username already exists!'));
            }
            const newUser = new User(req.body);
            newUser.save((err, savedUser) => {
                if(err) {
                    res.status(500);
                    return next(err);
                }
                const token = jwt.sign(savedUser.toObject(), process.env.SECRET);
                return res.status(201).send( {
                    sucess: true,
                    user: savedUser.toObject(),
                    token
                })
            })
        }
    )
});

authRouter.post('/login', (req, res, next) => {
    User.findOne( 
    { username: req.body.username.toLowerCase() }, 
    (err, user) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        if(!user || user.password !== req.body.password) {
            res.status(403);
            return next(new Error('Email or password are incorrect'));
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return res.status(200).send( {
            token,
            user: user.toObject(),
            success: true
        })
    })
});

module.exports = authRouter;