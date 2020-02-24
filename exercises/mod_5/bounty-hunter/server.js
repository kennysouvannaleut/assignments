const express = require('express');
const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.use('/bounty', require('./routes/bountyRoutes'));

// error handling - catch 404 and forward response to error handler
app.use(function(err, req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(error);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});