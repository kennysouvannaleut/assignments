const { User } = require('../models/user');

const auth = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1];
    // console.log('TOKEN: '+token);

    User.findByToken(token, (err, user) => {
        if (err) return next(err);

        if (!user) return res.status(401).send({
            isAuth: false,
            error: true
        });

        req.token = token;
        req.user = user;

        next();
    });
};

module.exports = { auth };
