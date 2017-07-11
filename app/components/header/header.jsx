import React from 'react'
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
        <Row >
          <Col span={2} >
            <div className='header-logo'>
              <img src='./dist/media/logo.png' />
            </div>
          </Col>
          <Col span={22} >
            <h1 className='title'>Ethereum names</h1>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
