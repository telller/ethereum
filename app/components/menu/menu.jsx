import React, { Component} from 'react'
import { Link } from 'react-router'
import './menu.styl'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      menu: [
        {
          title: 'faq',
          value: '/faq'
        },
        {
          title: 'graph',
          value: '/'
        },
        {
          title: 'buy',
          value: '/buy'
        },
        {
          title: 'sell',
          value: '/sell'
        }
      ]
    }
  }
  render () {
    return (
      <div id='menu'>
        {this.state.menu.map((el, key) => (
          <Link to={el.value} activeClassName='active' key={key}>
            <div className='menu-item'>
              {el.title}
            </div>
          </Link>)
        )}
      </div>
    )
  }
}
export default Menu
