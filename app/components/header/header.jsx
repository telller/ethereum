import React from 'react'
import MainMenu from '../menu/menu.jsx'
import Search from '../search/search.jsx'
import './header.styl'
import { Row, Col } from 'antd'
import logo from '../../../dist/media/logo.png'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div id='header'>
        <Row>
          <div className='title-logo'>
            <Col span={2} className='header-logo'>
              <img src={logo} />
            </Col>
            <Col span={6} >
              <h1 className='title'>Ethereum names</h1>
            </Col>
          </div>
          <Col className='main-menu'>
            <MainMenu />
          </Col>
          <div className='search-domains'>
            <Search />
          </div>
        </Row>
      </div>
    )
  }
}

export default Header
