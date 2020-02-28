const express = require('express');
const app = express();

const port = process.env.PORT || 9000;

app.use(express.json());

app.use('/todo', require('./routes/todoRoutes'));

app.use((err, req, res, next) => {
    console.log(err);
    return res.send( { errMsg: err.message } )
});

app.listen(port, () => {
    console.log(`Express app running on port ${port}`)
});