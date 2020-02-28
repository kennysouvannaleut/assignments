const express = require('express');
const app = express();

const port = process.env.PORT || 9000;

app.use(express.json());

app.use('/item', require('./routes/itemRoutes'));

app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`)
});