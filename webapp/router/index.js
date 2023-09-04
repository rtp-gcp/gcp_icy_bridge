// pull in dotenv and call its `config()` method.
require("dotenv").config();
// pull in the express framework
const express = require("express");
// pull in rate limit
const rateLimit = require("express-rate-limit");
// pull in cors
const cors = require("cors");

const app = express();
const port = 3000;

// add sub weather route
const weather = require("./weather");

// enable the JSON middleware on every route for our api
app.use(express.json());

// Create whitelist for dev
const whitelist = ["http://127.0.0.1", "http:127.0.0.1:5500"]
const corsOptions = {
    origin: (origin, callback) => {
        // This is for postman
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);

        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200
};

// Enable use of cors.  Now, use options
app.use(cors(corsOptions));

// Defines 1 second, and limit one request per second, per ip
const limiter = rateLimit({
    windowMs: 1000,
    max: 1
});
// Use the ratelimit on all routes
app.use(limiter);


// Create a test route with an anonymous function
app.get("/", (req, res) => res.json(
    { success: "Hello World!"}
));

// Provide the connection to the weather sub app as an api route
app.use("/weather", weather)


// Listen on the port and log to console using an anonymous
// function
app.listen(port, () => console.log("App listening on port ${port}"));

