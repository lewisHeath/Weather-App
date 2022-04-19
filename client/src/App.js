import './App.css';
import React, { useState } from 'react';
import InputCity from './components/InputCity';


function App() {

    const[data, setData] = useState({});

    async function handleButtonClick(event, city){
        event.preventDefault();
        const response = await fetch(`http://localhost:5000/weather?city=${city}`);
        const weather = await response.json();
        console.log(weather);
        setData(weather);
    }

  return (
    <div className="App">
        <InputCity setData={handleButtonClick} />
        <div>
            {/*if data is empty, show nothing, if data is not empty, show the data*/}
            {Object.keys(data).length === 0 ? null : (
                <div>
                    <h1>Weather in {data.location.name}</h1>
                    <p>Temperature: {data.current.temp_c} Celsius</p>
                    <p>wind speed: {data.current.wind_mph} mph</p>
                    <img src={data.current.condition.icon} alt="weather icon" />
                </div>
            )}
        </div>
    </div>
  );
}

export default App;
