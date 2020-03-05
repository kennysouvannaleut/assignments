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
                const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
                return res.status(201).send( {
                    token,
                    user: savedUser.withoutPassword(),
                    sucess: true
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
        if(!user) {
            res.status(403);
            return next(new Error('Username or Password are incorrect'));
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) {
                res.status(403);
                return next(new Error('Username or Password are inccorect'))
            }
            if(!isMatch) {
                res.status(403);
                return next(new Error('Username or Password are incorrect'))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(200).send( {
                token,
                user: user.withoutPassword(),
                success: true
            })
        })
    })
});

module.exports = authRouter;