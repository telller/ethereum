import Header from '../header/header.jsx'
import React, { Component } from 'react'
import Menu from '../menu/menu.jsx'
import './graph.styl'

class Graph extends Component {
  render () {
    return (
      <div id='graph'>
        <Header />
        <Menu />
        GRAPH
      </div>
    )
  }
}
export default Graph
