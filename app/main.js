import { Router, Route, hashHistory } from 'react-router'
import Graph from './components/graph/graph.js'
import Home from './components/home/home.jsx'
import Faq from './components/faq/faq.js'
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/faq' component={Faq} />
    <Route path='/graph' component={Graph} />
  </Router>,
  document.getElementById('root')
)
