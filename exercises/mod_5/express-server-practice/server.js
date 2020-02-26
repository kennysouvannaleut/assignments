const express = require("express");
const app = express();
const morgan = require("morgan");

// Middleware (for every request) //
app.use(express.json());     /* Looks for a request body, and turns it into "req.body" */
app.use(morgan("dev"));     /* Logs requests to the console" */

// Routes //
app.use("/movies", require("./routes/movieRouter"));

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



