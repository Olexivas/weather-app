import React from "react";

import "./current-weather.styles.scss";

const CurrentWeather = ({currentWeather: {city, temp, icon, alt, main}}) => {
  return (
    <div className="current-weather">
      <div className="current-weather__details">
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={alt}
          />
        </div>
        <div className="temp">{temp && parseInt(temp)}</div>
      </div>
      <div className="main">{main}</div>
      <div className="city">{city}</div>
    </div>
  );
};

export default CurrentWeather;
