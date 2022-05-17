import { weatherActionType } from './weather.actionType'

export const actionTypes = {
  ...weatherActionType,
}

export const receiveSuccess = (typeAction, response) => {
  return {
    type: actionTypes[typeAction],
    payload: response.data,
  }
}

export const receiveError = (type, error) => {
  return {
    type,
    message: error,
  }
}
