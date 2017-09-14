import {routerReducer} from 'react-router-redux'
import {combineReducers, applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import dataReducer from './reducers/data-reducer.js'
import findDomainReduser from './reducers/find-domain-reduser.js'

export default createStore(
  combineReducers({
    routing: routerReducer,
    data: dataReducer,
    findDomain: findDomainReduser
  }),
  {},
  applyMiddleware(logger, thunk)
)
