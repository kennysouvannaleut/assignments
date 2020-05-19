require('dotenv').config();

const express = require('express');
const expJWT = require('express-jwt');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express(); 

const db = require('./config/db.js')
db.connection.on('error', console.error.bind(console, 'connection error'));
db.connection.on('connected', (() => { console.log('connection open to db') }))

const users = require('./routes/user.js')
const issues = require('./routes/issue.js');
const comments = require('./routes/comment.js');

app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : true } ));

const requireAuth = expJWT( { secret : process.env.SECRET } );

app.get('/api', requireAuth, (req, res, next) => { res.send('authenticated') });

// router.use((req, res, next) => {
//     console.log('/' + req.method);
//     next()
// });

app.use('/auth', users);
app.use('/api/issues', issues);
app.use('/api/comments', comments);

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    return res.send( { errMsg : err.message } );
});

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server listening for requests on localhost:${port}`);
});
