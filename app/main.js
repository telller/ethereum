import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import store from './store'
import Graph from './components/graph/graph.jsx'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import React from 'react'
import './main.styl'

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Graph} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
