import React from "react";

import './weather-details.styles.scss'

const WeatherDetails = ({
  details: { feels_like, humidity, sea_level, pressure, temp_max, temp_min }
}) => {
  return (
    <div className="weather-details">
      <div className="weather-details__item">
        <span>Feels Like</span>
        <span>{feels_like && parseInt(feels_like)}</span>
      </div>
      <div className="weather-details__item">
        <span>Humidity</span>
        <span>{humidity}</span>
      </div>
      <div className="weather-details__item">
        <span>Pressure</span>
        <span>{pressure}</span>
      </div>
      <div className="weather-details__item">
        <span>Temp Max</span>
        <span>{temp_max && parseInt(temp_max)}</span>
      </div>
      <div className="weather-details__item">
        <span>Temp Min</span>
        <span>{temp_min && parseInt(temp_min)}</span>
      </div>
    </div>
  );
};

export default WeatherDetails;
