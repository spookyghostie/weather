import { FETCH_DATA, RECEIVE_DATA, REQUEST_DATA } from '../constants/ActionTypes'

const initialState = {
  cityList: [],
  weatherData: {},
  forecastData: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return state
    case RECEIVE_DATA:
      return action.state
    case REQUEST_DATA:
      return state
    default:
      return state
  }
}