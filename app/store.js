import {routerReducer} from 'react-router-redux'
import {combineReducers, applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers({
    routing: routerReducer
  }),
  {},
  applyMiddleware(logger, thunk)
)
