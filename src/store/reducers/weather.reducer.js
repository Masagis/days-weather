import { actionTypes } from '../actionsType'

const initState = {
  isLoading: false,
  weatherList: null,
}

const weather = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weatherList: action.payload || null,
      }
    case actionTypes.WEATHER_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      }

    case actionTypes.WEATHER_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.WEATHER_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weatherList: action.payload || null,
      }
    case actionTypes.WEATHER_SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      }

    default:
      return state
  }
}

export default weather
