import './App.css';
import React, { useState, useEffect } from 'react';
import InputCity from './components/InputCity';

function App() {

    const[data, setData] = useState({});

    async function handleButtonClick(city){
        const response = await fetch(`http://localhost:5000/weather?city=${city}`);
        const weather = await response.json();
        console.log(weather);
        setData(weather);
    }

    useEffect(() => {
        //get weather
        handleButtonClick('seoul');
    }, []);

  return (
    <div className="App">
        <InputCity setData={handleButtonClick} />
        <div>
            {/*if data is empty, show nothing, if data is not empty, show the data*/}
            {Object.keys(data).length === 0 ? null : 
                <div className='current-weather'>
                    <h1>Weather in {data.location.name}</h1>
                    <p>{data.current.condition.text}</p>
                    <p>Temperature: {data.current.temp_c} Celsius</p>
                    <p>wind speed: {data.current.wind_mph} mph</p>
                    <p>humidity: {data.current.humidity}</p>
                    <img src={data.current.condition.icon} alt="weather icon" />
                </div>
            }
            <div className="forecast-row">
                {Object.keys(data).length === 0 ? null : data.forecast.forecastday.map(day => (
                    <div className='forecast'>
                        <h2>{day.date}</h2>
                        <p>{day.day.condition.text}</p>
                        <p>{day.day.maxtemp_c}</p>
                        <p>{day.day.mintemp_c}</p>
                        <img src={day.day.condition.icon} alt="weather icon" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
