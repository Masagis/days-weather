import axios from 'axios'
import { actionTypes } from '../actionsType/index'

const base_url = 'https://api.weatherapi.com/v1'
const API_KEY = '482a7356529c42c192a95745221705'

export function getCurrentLoc(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.WEATHER_REQUEST, loading: true })
    return axios({
      method: 'GET',
      url: `${base_url}/forecast.json?key=${API_KEY}&q=${params?.latitude},${params?.longtitude}&days=10`,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.WEATHER_SUCCESS,
          payload: response.data,
        })
      })
      .catch((err) => {
        dispatch({ type: actionTypes.WEATHER_FAILED })
        throw err
      })
  }
}

export function getDataBySearch(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.WEATHER_SEARCH_REQUEST, loading: true })
    return axios({
      method: 'GET',
      url: `${base_url}/forecast.json?key=${API_KEY}&q=${params}&days=10`,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.WEATHER_SEARCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((err) => {
        dispatch({ type: actionTypes.WEATHER_SEARCH_FAILED })
        throw err
      })
  }
}
