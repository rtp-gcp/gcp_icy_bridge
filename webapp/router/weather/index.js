const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");


// Durham is 4464368

const fetchWeather = async (searchtext) => {
    
    // from the api docs
    //const url = 'https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}'
    // from the youtube video

    // Note the video used a backtick which makes me think its a bash shell script
    // environment variable, but the variable is from the .env file.  This
    // is unknown.
    //console.log("api key is", `${process.env.WEATHER_API_KEY}`)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchtext}&units=imperial&appid=${process.env.WEATHER_API_KEY}`
    try {
        const weatherStream = await fetch(url);
        const weatherJson = await weatherStream.json();
        return weatherJson;
    } catch (err) {
        return { Error: err.stack };
    }
}


// use of an anymous function to make a callback
router.get("/", (req, res) => {
    res.json({ success: "Hello Weather!"});
});


// A HTTP method GET version
router.get("/:searchtext", async (req, res) => {
    const searchtext = req.params.searchtext;
    const data = await fetchWeather(searchtext);
    res.json(data);
});


// A HTTP method POST version
router.post("/", async (req, res) => {
    const searchtext = req.body.searchtext;
    const data = await fetchWeather(searchtext);
    res.json(data);
});




// This creates a stub api of weather/ so that
// it can be connected in the parent app.
module.exports = router;

