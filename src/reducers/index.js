import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import list from './list'

export default combineReducers({
  router: routerReducer,
  list
})