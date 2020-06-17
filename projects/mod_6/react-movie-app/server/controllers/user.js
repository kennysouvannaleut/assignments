const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

exports.auth = function(req, res, next) {
    User.find({}).exec((err, users) => {
        if (err) { 
            res.status(500)
            return next(err);
        };
        return res.status(200).send(users);
    })
};

exports.register = function(req, res, next) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.staus(500);
            return next(err);
        }
        if (user) {
            res.status(403);
            return next(new Error('Invalid input. Please try again.'));
        }

        const newUser = new User(req.body);
        newUser.save((err, savedUser) => {
            if (err) { 
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.withoutPassword(), SECRET);
            return res.status(201).send({ 
                success: true, 
                user: savedUser.withoutPassword(),
                token
            }) 
        })
    });
};

exports.login = function(req, res, next) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500); 
            return next(err);
        }
        if (!user) { 
            res.status(403);
            return next(new Error('Invalid input, Please try again.'))
        };

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(403);
                return next(new Error('Invalid input. Please try again.'));
            }
            if (!isMatch) {
                res.status(403);
                return next(new Error('Invalid input. Please try again.'));
            };

            const token = jwt.sign(user.withoutPassword(), SECRET);
            return res.status(200).send({
                success: true,
                user: user.withoutPassword(),
                token
            })
        });
    });
};
