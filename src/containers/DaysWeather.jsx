import React from 'react'

function DaysWeather({ weatherList, isLoading }) {
  return (
    <div className="row mt-4">
      <div className="d-flex align-items-center">
        <h4 className="mb-3">Days Weather - </h4>{' '}
        <p className="mt-1">
          {!isLoading &&
            weatherList?.location.name +
              ', ' +
              weatherList?.location.region +
              ', ' +
              weatherList?.location.country}
        </p>
      </div>
      {weatherList?.forecast.forecastday.map((item) => (
        <div className="col-md-4 mb-5">
          <div
            className="card shadow rounded"
            style={{ backgroundColor: '#fff', border: 'none' }}
          >
            <div className="text-center p-3">
              <h5>{item.date}</h5>
              <h3>
                {item.day.mintemp_c}&deg;C - {item.day.maxtemp_c}&deg;C
              </h3>
              <img src={item.day.condition.icon} alt="icon-weather" />
              <h5>{item.day.condition.text}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DaysWeather
