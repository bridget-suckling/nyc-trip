import { RECEIVE_LOCATIONS } from '../Actions'

const initialState = []

function locationsReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_LOCATIONS:
      return payload
    default:
      return state
  }
}

export default locationsReducer
