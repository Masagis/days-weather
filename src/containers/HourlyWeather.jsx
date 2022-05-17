import React from 'react'

function HourlyWeather({ weatherList, isLoading }) {
  return (
    <div className="row mt-4">
      <div className="d-flex align-items-center">
        <h4 className="mb-3">Hourly/Days Weather - </h4>{' '}
        <p className="mt-1">
          {!isLoading &&
            weatherList?.location.name +
              ', ' +
              weatherList?.location.region +
              ', ' +
              weatherList?.location.country}
        </p>
      </div>
      {weatherList?.forecast.forecastday.map((item) =>
        item?.hour.map((value) => (
          <div className="col-md-2 mb-5">
            <div
              className="card shadow rounded"
              style={{ backgroundColor: '#fff', border: 'none' }}
            >
              <div className="text-center p-3">
                <h6>{value.time}</h6>
                <h3>{value.temp_c}&deg;C</h3>
                <img src={value.condition.icon} alt="icon-weather" />
                <h5>{value.condition.text}</h5>
              </div>
            </div>
          </div>
        )),
      )}
    </div>
  )
}

export default HourlyWeather
