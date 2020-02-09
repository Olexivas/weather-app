import React from "react";

import './current-weather.styles.scss'

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <div className="current-weather__details">
        <div className="icon">
          <img src="" alt="" />
        </div>
        <div className="temp">0 deg</div>
      </div>
      <div className="main">Clouds</div>
      <div className="city">Seoul</div>
    </div>
  );
};

export default CurrentWeather;
