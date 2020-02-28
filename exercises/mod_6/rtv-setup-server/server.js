const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');

const port = process.env.PORT || 9000;
const dbURL = 'mongodb://localhost:27017/user-auth';
const handleError = err => console.error(err);

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
    dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(handleError);

app.use('/auth', require('./routes/authRouter'));
app.use('/api', expressJwt( { secret: process.env.SECRET } ));
app.use('/api/issue', require('./routes/issueRouter'));
app.use('/api/issue/comment', require('./routes/commentRouter'));

app.use((err, req, res, next) => {
    console.log(err);
    if(err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send( { errMsg: err.message } )
});

app.listen(port, () => {
    console.log(`Express app connected to port ${port}`)
});