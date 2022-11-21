import { combineReducers } from 'redux'

import locationsReducer from './locations'

const reducer = combineReducers({
  locations: locationsReducer,
})

export default reducer
