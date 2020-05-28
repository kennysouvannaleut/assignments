const { User } = require('../models/user');

exports.auth = function(req, res) {
    res.status(200).send({
        isAuth: true,
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        image: req.user.image
    });
};

exports.register = function(req, res) {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.send({ 
            success: false, 
            error: err 
        });
        return res.status(200).send({ success: true, user: doc })
    });
};

exports.login = function(req, res, next) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return next(err);

        if (!user) return res.send({
            success: false,
            message: 'Invaliid email, please try again.'
        });

            user.comparePassword(req.body.password, (err, isMatch) => {
                if (err) return next(err);

                if (!isMatch) return res.send({
                    success: false,
                    message: 'Invalid password, please try again.'
                });

                user.generateJwt((err, user) => {
                    if (err) return res.status(400).send(err);

                    return res.status(200).send({
                        success: true,
                        userId: user._id,
                        payload: user
                });
            });
        });
    });
};

exports.logout = function(req, res) {
    User.findOneAndUpdate({ _id: req.userId }, 
    { token: '', tokenExp: '' }, (err, doc) => {
        if (err) return res.send({
            success: false,
            error: err
        });
        return res.status(200).send({ success: true, doc })
    });
};
