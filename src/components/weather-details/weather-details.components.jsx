import React from "react";

import './weather-details.styles.scss'

const WeatherDetails = () => {
  return (
    <div className="weather-details">
      <div className="weather-details__item">
        <span>High Temperature</span>
        <span>2 deg</span>
      </div>
    </div>
  );
};

export default WeatherDetails;
