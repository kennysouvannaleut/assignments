const express = require('express');
const itemRoutes = express.Router();

itemRoutes.use('/', (req, res, next) => {
    req.body = { name: 'Ninja'}
    console.log('GET request was a success!');
    res.send(req.body)
    next()
});

module.exports = itemRoutes;