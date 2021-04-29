import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import activities from './activities'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    activities
  })
