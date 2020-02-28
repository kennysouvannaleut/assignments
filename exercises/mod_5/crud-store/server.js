const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/inventorydb';
const app = express();

const port = process.env.PORT || 9000;
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

app.use('/inventory', require('./routes/inventoryRoutes'));

app.use((err, req, res, next) => {
    console.log(err);
    return res.send( { errMsg: err.message } )
});

app.listen(port, () => {
    console.log(`Express app connected to port ${port}`)
});