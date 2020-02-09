import React, { useEffect, useState } from "react";
import "./App.css";

import WeatherDetails from "./components/weather-details/weather-details.components";
import Forecast from "./containers/forecast.components";
import CurrentWeather from "./components/current-weather/current-weather.component";

const API_KEY = "c902fcd5ff0fe30b894085aea4ee621c";

function App() {
  const [currentWeather, setCurrentWeather] = useState({
    temp: "",
    city: "",
    icon: "",
    alt: "",
    main: ""
  });

  const [forecast, setForecast] = useState([]);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=kryvyi rih,ua&appid=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(weather => {
        setCurrentWeather({
          city: weather.city.name,
          temp: weather.list[0].main.temp,
          icon: weather.list[0].weather[0].icon,
          alt: weather.list[0].weather[0].description,
          main: weather.list[0].weather[0].main
        });
        setForecast(weather.list);
        setDetails(weather.list[0].main)
        console.log(weather);
      });
  }, []);

  return (
    <div className="app">
      <CurrentWeather currentWeather={currentWeather} />
      <Forecast forecast={forecast} />
      <WeatherDetails details={details}/>
    </div>
  );
}

export default App;
