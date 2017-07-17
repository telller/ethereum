import Header from '../header/header.jsx'
import React, { Component } from 'react'
import Menu from '../menu/menu.jsx'
import FaqBody from '../faq-body/faq-body.jsx'

class Faq extends Component {
  render () {
    return (
      <div id='faq'>
        <Header />
        <Menu />
        <FaqBody />
      </div>
    )
  }
}
export default Faq
