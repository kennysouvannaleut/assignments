const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/bountiesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.use('/bounty', require('./routes/bountyRoutes'));

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
});

const port = process.env.PORT || 9000;
    app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});