import {routerReducer} from 'react-router-redux'
import {combineReducers, applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import menuReducer from './reducers/menuReducer'
import blogReducer from './reducers/blogReducer'

export default createStore(
  combineReducers({
    routing: routerReducer,
    menu: menuReducer,
    blog: blogReducer
  }),
  {},
  applyMiddleware(logger, thunk)
)
