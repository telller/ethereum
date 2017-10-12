import {routerReducer} from 'react-router-redux'
import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import dataReducer from './reducers/data-reducer.js'
import categoriesReducer from './reducers/categories-reducer.js'
import filterReducer from './reducers/filter-reducer.js'

export default createStore(
  combineReducers({
    routing: routerReducer,
    data: dataReducer,
    categories: categoriesReducer,
    filter: filterReducer
  }),
  {},
  applyMiddleware(
    thunk, logger
  )
)
