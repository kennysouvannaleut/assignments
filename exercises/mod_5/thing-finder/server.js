const express = require('express');
const app = express();

const port = process.env.port || 9000;

app.use(express.json());

app.use('/inventory', require('./routes/inventoryRoutes'));

app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404
    next(err)
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});