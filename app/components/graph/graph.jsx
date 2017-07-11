import Header from '../header/header.jsx';
import React, { Component } from 'react';
import Menu from '../menu/menu.jsx';
import GraphTable from '../graph-table/table.jsx';
import { Row, Col } from 'antd';
import './graph.styl'

class Graph extends Component {
  render () {
    return (
      <div id='graph'>
        <Header />
        <Menu />
        <GraphTable />
      </div>
    )
  }
}
export default Graph
