console.log("JFD app.js Restart");

const express = require('express')
const app = express()


// this is used for render()
// This adds EJS
app.set("view engine", "ejs")
// This uses file structure:
// .
// ./app.js - see package.json for name
// ./view(s?)
//      /index.ejs

// use this for public?
app.use(express.static('public'));
// This uses in EJS file href="css/style.css" paths
// resulting in a file structure like
// 
// .
// ./app.js
// ./view
//      /index.ejs
// ./public
//      /css
//         /style.css




// setup a route
// get has two parameters - the second is
// a function/callback which has two
// or three parameters.
//
// 500 error
// 200 ok
// 404 not found
app.get('/', (req, res) => {

  console.log("get /")
  console.log(req)

  //res.sendStatus(500) // error on server
  // or
  //res.status(500) // error on server
  // or chain
  //res.status(500).send("HI") // error on server
  // or chain with json
  //res.status(500).json({message: "Error"}) // error on server
  // or just default status and json
  //res.json({message: "Error"}) // error on server
  // it seems only one send can work at a time?
  //res.send('Hi')
  // or a file
  //res.download('README.md')
  // or
  //res.render("index")
  // or add some text
  res.render("index")
})



app.get('/index.ejs', (req, res) => {

  console.log("get /index.ejs")
  console.log(req)

  res.render("index")
})


app.get('/about.ejs', (req, res) => {

  console.log("get /about.ejs")
  //console.log(req)

  res.render("about")
})



app.get('/myconfig', (req, res) => {

  console.log("get /myconfig")

  var ALBUMBUCKETNAME = process.env.ALBUMBUCKETNAME;
  var IDENTITYPOOLID = process.env.IDENTITYPOOLID;
  var BUCKETREGION = process.env.BUCKETREGION;

  res.json({albumBucketName: ALBUMBUCKETNAME, bucketRegion: BUCKETREGION, identityPoolId: IDENTITYPOOLID})

})

app.get('/doit.ejs', (req, res) => {

  console.log("get /doit.ejs")
  //console.log(req)

  res.render("doit")
})




/////////////////

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

// Listen to the App Engine-specified port, or 8080 otherwise
// GCP specific, is process.env.PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


//////////////////////////



