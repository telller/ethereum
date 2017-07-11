import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import store from './store'
import Graph from './components/graph/graph.jsx'
import Sell from './components/sell/sell.jsx'
import Buy from './components/buy/buy.jsx'
import Faq from './components/faq/faq.jsx'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import React from 'react'
import './main.styl'

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Graph} />
      <Route path='/faq' component={Faq} />
      <Route path='/buy' component={Buy} />
      <Route path='/sell' component={Sell} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
