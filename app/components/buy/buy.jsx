import Header from '../header/header.jsx'
import React, { Component } from 'react'
import BuyBody from '../buy-body/buy-body.jsx'
import Menu from '../menu/menu.jsx'

class Buy extends Component {
  render () {
    return (
      <div id='buy'>
        <Header />
        <Menu />
        <BuyBody />
      </div>
    )
  }
}
export default Buy
