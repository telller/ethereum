import React, { Component } from 'react'
import Menu from '../menu/menu.js'
import './home.styl'

class Home extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render () {
    return (
      <div id='home'>
        <Menu pathname='/content-library/source-systems'
          menuItems={[
            {title: 'faq', value: '/faq'},
            {title: 'graph', value: '/graph'},
            {title: 'buy', value: '/buy'},
            {title: 'sell', value: '/sell'}
          ]} />
        {this.props.children}
      </div>
    )
  }
}
export default Home
