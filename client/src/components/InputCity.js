import React, { useState } from 'react'
import './InputCity.css'

function InputCity({ setData }) {

    const [city, setCity] = useState('');

    const handleKeypress = e => {
      //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            setData(city);
            setCity('');
        }
    };

  return (
    <div className='input-container'>
        <div className="container">
            <input autoFocus type="text" placeholder="Enter city name" value={city} onChange={e => setCity(e.target.value)} onKeyDown={handleKeypress} className="" />
            {/* <button type="submit" onClick={e => setData(e, city)} className="btn btn-success btn-lg button">get weather</button> */}
        </div>
    </div>
  )
}

export default InputCity