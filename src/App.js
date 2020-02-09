import React from "react";
import "./App.css";

import WeatherDetails from "./components/weather-details/weather-details.components";
import Forecast from "./containers/forecast.components";
import CurrentWeather from "./components/current-weather/current-weather.component";

function App() {
  return (
    <div className="app">
      <CurrentWeather />
      <Forecast />
      <WeatherDetails />
    </div>
  );
}

export default App;
