const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.use("/bounty", require("./routes/bountyRoutes"));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});