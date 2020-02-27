const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

// Middleware (for every request) //
app.use(express.json());     /* Looks for a request body, and turns it into "req.body" */
app.use(morgan("dev"));     /* Logs requests to the console" */

// Connect to DB //
mongoose.connect("mongodb://localhost:27017/moviesdb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
);

// Routes //
app.use("/movies", require("./routes/movieRoutes"));

// Custom error handling middleware //
app.use((err, req, res, next) => {  /* This custom error handling only runs as a last resort, if all other routes havve failed to send a response back */
    console.log(err);
    return res.send({errMsg: err.message})
});

// Server listen //
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});



