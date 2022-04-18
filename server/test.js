//fetch data from localhost:5000/weather?city=London
const fetch = require('node-fetch');

async function getWeather(city) {
    const data = await fetch(`http://localhost:5000/weather?city=${city}`);
    const weather = await data.json();
    // console.log(weather);
    return weather;
}

async function printWeather(city){

    const weather = await getWeather(city);

    //if the city is not found
    if(weather.error){
        console.log(`${city} is not found`);
    } else {
        let name = weather.location.name;
        let temp = weather.current.temp_c;
        let condition = weather.current.condition.text;
        console.log(`The weather in ${name} is ${temp} degrees and ${condition}`);
    }
    
}

//get params from command line
const args = process.argv.slice(2);
// console.log(args);

printWeather(args[0]);