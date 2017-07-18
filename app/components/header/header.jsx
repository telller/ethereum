import React from 'react'
import Menu from '../menu/menu.jsx'
import './header.styl'
import { Row, Col } from 'antd'

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
              <img src='./dist/media/logo.png' />
            </Col>
            <Col span={6} >
              <h1 className='title'>Ethereum names</h1>
            </Col>
          </div>
          <Col className='menu'>
            <Menu />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
