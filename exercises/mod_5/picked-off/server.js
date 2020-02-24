const express = require('express');
const app = express();
const uuid = require('uuid/v4');

// app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/items', (req, res, next) => {
    console.log('THE ITEMS MIDDLEWARE WAS EXECUTED SUCCESSFULLY');
    next();
});

app.use((req, res, next) => {
    req.body = { name: 'Ninja' }
    next();
});

app.get('/items', (req, res, next) => {
    console.log('GET REQUEST RECEIVED')
    res.send(req.body)
})

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});