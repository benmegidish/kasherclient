import '../App.css'
import { useState } from 'react';
import axios from 'axios'
function SenddataComp() {
  
  const [city, setCity] = useState("");

  const sendData = () => {
    if (city === "") {
      alert("You are not choosing any city!")
    } else {
      axios.post("https://kasherserver.up.railway.app/" + city);
      alert("Check telgram for the data")
    }
  };

  const chooseCity = (value) => {
    if (value === "select") {
      setCity("");
    } else {
      setCity(value)
    }
  }

  return (
    <div >
      <div className="app">
        <div className='selectMenu'>
          <select onChange={(e => chooseCity(e.target.value))}>
            <option>select</option>
            <option>haifa</option>
            <option>petah-tikva</option>
            <option>beer-sheva</option>
            <option>kiryat-gat</option>
          </select>
        </div>
        <div>
          <input type='button' name='Press' value="Press" id='sendButton' onClick={() => sendData()} />
        </div>
      </div>

    </div>
  );
}

export default SenddataComp;
