import React from "react";

import ForecastItem from "../components/forecast-item/forecast-item.component";

const Forecast = ({forecast}) => {
  return (
    <div className="forecast">
      {forecast.filter((item, index) => index < 5).map(item => <ForecastItem item={item} />)}
    </div>
  );
};

export default Forecast;
