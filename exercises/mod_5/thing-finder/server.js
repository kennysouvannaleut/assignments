const express = require('express');
const app = express();
const port = process.env.port || 9000;

app.use(express.json());

app.use('/inventoryItem', require('./routes/inventoryRoutes'));

app.use(function(req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(error)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})