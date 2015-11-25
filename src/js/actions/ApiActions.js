import * as types from '../constants/ActionTypes'

const BASE_URL = '/api/city'

export function requestData() {
  return { type: types.REQUEST_DATA }
}

export function receiveData(state) {
  return { type: types.RECEIVE_DATA, state }
}

export function fetchData(url = BASE_URL) {
  return function (dispatch) {
    dispatch(requestData())
    return fetch(url)
            .then((response) => response.json())
            .then((json) => dispatch(receiveData(json)))
            .catch((err) => console.log(err)) //eslint-disable-line
  }
}