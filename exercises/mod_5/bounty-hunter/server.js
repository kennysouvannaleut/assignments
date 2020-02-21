const express = require('express');
const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.use('/bounty', require('./routes/bountyRoutes'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});