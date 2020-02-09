import React from "react";

import './forecast-item.styles.scss'

const ForecastItem = () => {
  return (
    <div className="forecast__item">
      <div className="date">Sun, 12PM</div>
      <div className="icon">
        <img src="" alt="" />
      </div>
      <div className="temp">0 deg</div>
    </div>
  );
};

export default ForecastItem;
