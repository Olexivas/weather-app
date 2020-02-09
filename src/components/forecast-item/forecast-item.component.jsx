import React from "react";

import moment from 'moment'

import "./forecast-item.styles.scss";

const ForecastItem = ({
  item: {
    dt_txt,
    main: { temp },
    weather
  }
}) => {
  return (
    <div className="forecast__item">
      <div className="date">{moment(dt_txt).format('ddd, HH:mm')}</div>
      <div className="icon">
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
      </div>
      <div className="temp">{temp && parseInt(temp)}</div>
    </div>
  );
};

export default ForecastItem;
