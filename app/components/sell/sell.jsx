import Header from '../header/header.jsx'
import React, { Component } from 'react'
import Menu from '../menu/menu.jsx'
import SellBody from '../sell-body/sell-body.jsx'
import './sell.styl'

class Sell extends Component {
  render () {
    return (
      <div id='buy'>
        <Header />
        <Menu />
        <SellBody />
      </div>
    )
  }
}
export default Sell
