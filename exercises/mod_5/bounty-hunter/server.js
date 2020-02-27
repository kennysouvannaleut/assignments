const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/bountiesdb', 
{

app.use('/bounty', require('./routes/bountyRoutes'));

app.use((err, req, res, next) => {
    console.log(err);
    res.send({ errMsg: err.message })
});

const port = process.env.PORT || 9000;
    app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});