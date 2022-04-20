//require and create express app
const express = require('express');
const app = express();
const fetch = require('node-fetch');

//API KEY
const APIKEY = "871adc9d30164abebfb223517221804";

//port 
const PORT = process.env.PORT || 5000;

//use json
app.use(express.json());

//weather get request
app.get('/weather', async (req, res) => {
    //get the city name from the request
    const city = req.query.city;
    console.log(city);
    //fetches the weather data from the API
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&days=7&aqi=no&alerts=no`);
    //converts the data to json
    const weather = await data.json();
    console.log(weather);
    console.log(weather.forecast);
    //returns the weather data
    res.send(weather);
    //returns the data
});

//listen on port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
