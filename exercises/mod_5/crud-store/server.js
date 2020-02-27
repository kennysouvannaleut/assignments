const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/inventorydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.use('/inventory', require('./routes/inventoryRoutes'));

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
});

const port = process.env.PORT || 9000
    app.listen(port, () => {
    console.log(`Express app is connected on port ${port}`)
});
