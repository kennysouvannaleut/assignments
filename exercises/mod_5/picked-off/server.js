const express = require('express');
const app = express();

const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

app.use('/item', require('./routes/items'));

app.use(function(req, res, next) {
    const err = new Error('Item Not Found');
    err.status = 404;
    next(err);
});

const port = process.env.PORT || 9000;
    app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});