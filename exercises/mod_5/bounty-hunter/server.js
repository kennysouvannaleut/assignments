const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/bounties', require('./routes/bountyRouter'));

app.use(function(req, res, next) {
    const err = new Error('Item Not Found');
    err.status = 404;
    next(err);
});

const port = process.env.PORT || 8000;
    app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});