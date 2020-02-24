const express = require('express');
const items = express.Router();

items.use('/item', (req, res, next) => {
    req.body = {name: 'Rick'}
    next();
});

items.get('/item', (req, res, next) => {
    console.log('GET REQUEST RECEVIED')
    res.send(req.body)
});

module.exports = items;