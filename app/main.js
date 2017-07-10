import { Router, Route, hashHistory } from 'react-router'
import Graph from './components/graph/graph.jsx'
import Sell from './components/sell/sell.jsx'
import Buy from './components/buy/buy.jsx'
import Faq from './components/faq/faq.jsx'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Graph} />
    <Route path='/faq' component={Faq} />
    <Route path='/buy' component={Buy} />
    <Route path='/sell' component={Sell} />
  </Router>,
  document.getElementById('root')
)
