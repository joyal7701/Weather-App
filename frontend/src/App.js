import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const API_KEY = "dfc031bdd72d08ad14e84945dbc9991e";

  useEffect(() => {
    // Clear history when the component mounts
    const clearHistory = async () => {
      try {
        await axios.post("http://localhost:5000/api/clearhistory");
      } catch (err) {
        console.error("Error clearing history", err);
      }
    };

    clearHistory();
  }, []);

  const getWeather = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);

      await axios.post("http://localhost:5000/api/userdata", {
        city: response.data.name,
        temperature: response.data.main.temp,
      });

      // Fetch updated history
      const historyResponse = await axios.get(
        "http://localhost:5000/api/userdata"
      );
      setHistory(historyResponse.data);
    } catch (err) {
      setError("City not found");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <form onSubmit={getWeather}>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Get Weather</button>
        </form>
        {error && <p>{error}</p>}
        {weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </header>
      <h2>Previously Searched Cities</h2>
      <div id="searchHistory" className="search-history">
        {[...history].reverse().map((item, index) => (
          <div key={index}>
            <div>
              <strong>City:</strong> {item.city}
            </div>
            <div>
              <strong>Temperature:</strong> {item.temperature}°C
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
