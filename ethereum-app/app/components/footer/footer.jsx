import React, { Component } from 'react'
import MainMenu from '../menu/menu.jsx'
import './footer.styl'

export default class Footer extends Component {
  render () {
    return (
      <footer id='footer'>
        <MainMenu className='footer-menu' />
      </footer>
    )
  }
}
