import React, { Component} from 'react'
import { Link, browserHistory } from 'react-router'
// import './SubHeader.styl'

class Menu extends Component {
  render () {
    const { menuItems = [] } = this.props
    return (
      <div className=''>
        {menuItems.map((r, index) => (
          <div key={index} className=''>
            <Link to={r.value}>{r.title}</Link>
          </div>)
        )}
      </div>
    )
  }
}
export default Menu
