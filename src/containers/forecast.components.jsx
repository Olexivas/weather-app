import React from 'react'

import ForecastItem from '../components/forecast-item/forecast-item.component'

const Forecast = () => {
    return (
        <div className="forecast">
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
            <ForecastItem />
        </div>
    )
}

export default Forecast
