require('dotenv').config();

const express = require('express');
const expJwt = require('express-jwt');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const { SECRET, PORT } = process.env;

const db = require('./config/db');
db.connection.on('error', console.error.bind(console, 'Connection error'));
db.connection.on('connected', () => { console.log('Connection open to db') });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

const requireAuth = expJwt({ secret: SECRET });

app.get('/api', requireAuth, (req, res, next) => {
    res.send('Successful');
    next();
});

app.use('/users', require('./routes/user'));
app.use('/api/discussions', require('./routes/discussion'));
app.use('/api/favorites', require('./routes/favorite'));
app.use('/api/ratings', require('./routes/rating'));

app.use((err, req, res, next) => {
    console.error(err);

    if (err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is listening on localhost:${PORT}`);
});
