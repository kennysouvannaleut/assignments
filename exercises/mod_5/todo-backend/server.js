const express = require('express');
const app = express();

app.use(express.json());

app.use('/todos', require('./routes/todosRouter'));

app.use(function(req, res, next) {
    const err = new Error('Item Not Found')
    err.status = 404
    next(err)
});

const port = process.env.PORT || 9000
    app.listen(port, () => {
    console.log(`Express app is running on port ${port}`)
});

