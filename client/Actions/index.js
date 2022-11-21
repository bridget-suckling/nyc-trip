import { fetchLocations } from '../apis/locations'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'

export function requestLocations() {
  return {
    type: REQUEST_LOCATIONS,
  }
}

export function receiveLocations(locations) {
  return {
    type: RECEIVE_LOCATIONS,
    payload: locations,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchLocationsAction() {
  return (dispatch) => {
    dispatch(requestLocations())
    return fetchLocations()
      .then((locations) => {
        dispatch(receiveLocations(locations))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
