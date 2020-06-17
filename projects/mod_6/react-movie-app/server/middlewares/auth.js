const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

const auth = (req, res, next) => {
    let result;
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = req.headers.authorization.split(' ')[1];
        const options = { expiresIn: '2d' };

        try {
            result = jwt.verify(token, SECRET, options);
            req.user = result;
            next()
        }
        catch (err) {
            throw new Error(err);
        }
    } else {
        result = {
            error: 'Failed authentication. No token found.',
            status: 401
        };
        res.status(401).send(result);
    }
};

module.exports = { auth };
