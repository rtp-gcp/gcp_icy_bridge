console.log("JFD publicapp.js Restart");

// pull in dotenv and call its config method
require("dotenv").config()
// This app uses express, so pull it in
const a_express = require('express')
// pull in rate limit
const a_rate_limit = require("express-rate-limit")
// pull in cors
//const a_cors = require("cors")
//
// NOTE: All of this CORS stuff is irrelevant because we are running on
// a single server.  Changing the whitelist has no effect
// since we are always on the same server and port.
//
// QED all the CORS stuff is removed.
//
// add the router code
const a_router = require("./router/privateapp")

// Initialize the app
const an_app = a_express()

// enable the JSON middleware on every route for our api
an_app.use(a_express.json())


// Create whitelist for dev
//const whitelist = ["http://4.4.4.4"]
// orig
// These are the available sites which can use the routes
//   The first one is for development.
//   The second one is for a hosting site on a specific port.
//const whitelist = ["http://127.0.0.1", "http:127.0.0.1:5500", "http:127.0.0.1:8080"]
//const cors_options = {
//  origin: (origin, callback) => {
//    console.log("JFD CORS Callback check");
//    console.log("origin: %s", origin);

    // If the origin is undefined or
    // the origin is not in the whitelist.  This is for postman
    // running on localhost.  ie. postman running on localhost
    // will have a specified origin, and thus it will not return
    // an index of -1, thus index != -1.  -1 is when its not in
    // the whitelist.
//    if (!origin || whitelist.indexOf(origin) !== -1) {
//      console.log("JFD origin is ok. Return true.");
//      callback(null,true)
//    } else {
//      console.log("JFD origin is bad. Return error.");
//      callback(new Error("JFD Not allowed by CORS"))
//    }
//  },
//  optionsSuccessStatus: 200
//}

// Enable use of cors, Now, with options
//an_app.use(a_cors(cors_options))

// Defines 1 second and limit one request per second per ip
const a_limiter = a_rate_limit({
  windowMs: 1000,
  // If you put 1 here, it will be too small, since its multiple
  // fetches to complete the style sheets, the images, etc.
  max: 10
})
// Use the rate limit on all routes
an_app.use(a_limiter)
// If this is enabled, you can get a 429 error which is a rate limit 
// error


// To remove warnings/erros on style sheets and images,
// tell the app where the static portion is based upon the
// directory name.  The parameter to static() is the 
// directory name - in this case 'public'.
// https://stackoverflow.com/a/70123712/1008596
// This is the method shown in official docs
an_app.use(a_express.static('public'));
//an_app.use(a_express.static('public/'));
//an_app.use('/public', a_express.static('public'));

// this is used for render()
// This adds EJS
an_app.set("view engine", "ejs")

//////////////////////////////////////////////////////////////
//
// R O U T E S
//
//////////////////////////////////////////////////////////////

// setup a route
// get has two parameters - the second is
// a function/callback which has two
// or three parameters.
//
// 500 error
// 200 ok
// 404 not found


//////////////////////////////////////////////////////////////
//
// Web Server Web Page URLS
//
//////////////////////////////////////////////////////////////


an_app.get('/', (req, res) => {
  // This will call the code to show the webpage
  res.render("index")
  // This will just show json
  //res.json({success:"Hello World"})
})


an_app.get('/index.ejs', (req, res) => {

  console.log("render views/index.ejs")
  console.log(req)

  // This calls views/index.ejs
  res.render("index")
})

an_app.get('/about.ejs', (req, res) => {

  console.log("render views/about.ejs")
  //console.log(req)

  res.render("about")
})

an_app.get('/doit.ejs', (req, res) => {

  console.log("get /doit.ejs")
  //console.log(req)

  res.render("doit")
})


//////////////////////////////////////////////////////////////
//
// Web Server Web App API URLS
//
//////////////////////////////////////////////////////////////

// provide the connection to the router
an_app.use("/router", a_router)


//an_app.get('/tryfirebase', (req, res) => {
//
//  console.log("get /tryfirebase.ejs")
//})





// Listen to the App Engine-specified port, or 8080 otherwise
// GCP specific, is process.env.PORT
const PORT = process.env.PORT || 8080;
an_app.listen(PORT, () => {
  console.log(`Public wep app listening on port ${PORT}`)
})






