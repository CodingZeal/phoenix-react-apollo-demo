import { combineReducers } from 'redux'

import { reducer as appReducer } from '../modules/app'

export default combineReducers({
  app: appReducer
})
