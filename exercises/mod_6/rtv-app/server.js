const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');

const dbURL = 'mongodb://localhost:27017/user-auth';

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
    dbURL, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }, 
    (err) => {
        if(err) throw err;
        console.log('MongoDB connection established');
    }
);

app.use('/api', expressJWT( { secret: process.env.SECRET } ));
app.use('/auth', require('./routes/authRouter'));
app.use('/api/post', require('./routes/postRouter'));
app.use('/public', require('./routes/publicRouter'));

app.use((err, req, res, next) => {
    console.log(err);
    if(err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send( { errMsg: err.message } );
});

const PORT = process.env.PORT || 9000;
    app.listen(PORT, () => {
    console.log(`Server is running on local port ${PORT}`);
});