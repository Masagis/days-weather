import { combineReducers } from 'redux'
import weather from './weather.reducer'

const appReducer = combineReducers({
  weather,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
