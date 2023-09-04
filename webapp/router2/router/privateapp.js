const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");






//
// Private routine called by api route ByID
//
// use of an anymous function to make a callback
const fetchWeatherByID = async (searchtext) => {
    console.log("fetchweather searchtext:%s", searchtext)

    // from the webpage, 
    // Durham city id is 4464368

    // from the api docs
    //const url = 'https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}'
                // https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

    const url = `https://api.openweathermap.org/data/2.5/weather?id=${searchtext}&units=imperial&appid=${process.env.WEATHER_API_KEY}`
    try {
        const weatherStream = await fetch(url)
        const weatherJson = await weatherStream.json()
        return weatherJson
    } catch (err) {
        return { Error: err.stack}
    }
}


//
// Private routine called by api route ByName
//
const fetchWeatherByName = async (searchtext) => {
    console.log("fetchweather searchtext:%s", searchtext)

    // from the webpage, 
    // City Durham
    // City Wichita

    // from the api docs
    //const url = 'https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}'
                // https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchtext}&units=imperial&appid=${process.env.WEATHER_API_KEY}`
    try {
        const weatherStream = await fetch(url)
        const weatherJson = await weatherStream.json()
        return weatherJson
    } catch (err) {
        return { Error: err.stack}
    }
}




//////////////////////////////////////////////////////////////
//
// Web Server Web App API URLS
//
//////////////////////////////////////////////////////////////


//
// https://server.com/router/
//
// use of an anymous function to make a callback
router.get("/", (req, res) => {
    res.json({ success: "hello router"});
});


//
// https://server.com/router/4464368
//
// A HTTP method GET version
router.get("/:searchtext", async(req, res) => {
    console.log('in searchtext url %s', req.params)
    console.log('req.params.searchtext: %s', req.params.searchtext)
    const searchtext = req.params.searchtext;
    const data = await fetchWeatherByID(searchtext)
    res.json(data)
})

//
// https://server.com/router/ByID/4464368
//
// A HTTP method GET version
router.get("/ByID/:searchtext", async(req, res) => {
    console.log('in searchtext url %s', req.params)
    console.log('req.params.searchtext: %s', req.params.searchtext)
    const searchtext = req.params.searchtext;
    const data = await fetchWeatherByID(searchtext)
    res.json(data)
})

//
// https://server.com/router/ByName/Durham
//
// A HTTP method GET version
router.get("/ByName/:searchtext", async(req, res) => {
    console.log('in searchtext url %s', req.params)
    console.log('req.params.searchtext: %s', req.params.searchtext)
    const searchtext = req.params.searchtext;
    const data = await fetchWeatherByName(searchtext)
    res.json(data)
})


// This creates a stub api of myrouter/ so that
// it can be connected in the parent app.
module.exports = router;