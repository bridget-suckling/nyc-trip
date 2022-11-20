import { RECEIVE_LOCATIONS } from '../Actions'

function locationsReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_LOCATIONS:
      return payload
    default:
      return state
  }
}

export default locationsReducer
