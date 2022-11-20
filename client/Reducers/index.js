import { RECEIVE_LOCATIONS } from '../Actions'

function locations(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_LOCATIONS:
      return payload
    default:
      return state
  }
}

export default locations
