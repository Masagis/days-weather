import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import DaysWeather from './DaysWeather'
import HourlyWeather from './HourlyWeather'
import { getCurrentLoc, getDataBySearch } from '../store/actions/weather.action'

function weatherHome() {
  const dispatch = useDispatch()
  const [latLong, setLatLong] = useState()

  const { weatherList, isLoading } = useSelector((state) => state.weather)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((res) =>
      setLatLong({
        latitude: res.coords.latitude,
        longtitude: res.coords.longitude,
      }),
    )
  }, [])

  useEffect(() => {
    if (latLong) {
      dispatch(getCurrentLoc(latLong))
    }
  }, [latLong])

  const handleSearch = debounce((value) => {
    dispatch(getDataBySearch(value))
  }, 500)

  return (
    <div className="mt-5">
      <div className="align-items-center mb-4">
        <Input
          type="text"
          placeholder="Search by city or region"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="row">
        <div className="col-md-12 mb-5">
          <div
            className="card shadow rounded"
            style={{ backgroundColor: '#fff', border: 'none' }}
          >
            <div className="text-center p-3">
              <h5>
                {!isLoading &&
                  weatherList?.location.name +
                    ', ' +
                    weatherList?.location.region +
                    ', ' +
                    weatherList?.location.country}
              </h5>
              <h3>{weatherList?.current.temp_c}&deg;C</h3>
              <p>feels like: {weatherList?.current.feelslike_c}&deg;C</p>
              <img
                src={weatherList?.current.condition.icon}
                alt="icon-weather"
              />
              <h3>{weatherList?.current.condition.text}</h3>
              <p>Last Updated : {weatherList?.current.last_updated}</p>
            </div>
          </div>
        </div>
      </div>
      <DaysWeather weatherList={weatherList} isLoading={isLoading} />
      <HourlyWeather weatherList={weatherList} isLoading={isLoading} />
    </div>
  )
}

export default weatherHome
