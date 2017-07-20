import React, { Component } from 'react'
import {Input, InputNumber, Icon, Row, Col, Button} from 'antd'
import './sell.styl'

class Sell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      countSellDomain: 1
    }
  }

  clickSellAdd () {
    this.setState({
      countSellDomain: this.state.countSellDomain + 1
    })
  }

  componentWillReceiveProps (visible) {
    this.setState({
      countSellDomain: 1
    })
  }

  render () {
    let arr = new Array(this.state.countSellDomain)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = 0
    }
    return (
      <div id='sell'>
        <div className='form'>
          <Input placeholder='Name' prefix={<Icon type='user' />} />
          <Input placeholder='Email' prefix={<Icon type='mail' />} />
          {
            arr.map((item, index) => (
              <Row className='sell-domain' key={index}>
                <Col span={18}>
                  <Input placeholder='Domain Name' />
                </Col>
                <Col span={6}>
                  <InputNumber
                    placeholder='Price'
                    min={0.01}
                    step={0.01}
                  />
                </Col>
              </Row>
            ))
          }
          <Row className='btn-add'>
            <Button shape='circle' icon='plus' onClick={() => this.clickSellAdd()} />
          </Row>
          <Input.TextArea
            placeholder='Comment'
            autosize={{ minRows: 4, maxRows: 6 }}
          />
        </div>
      </div>
    )
  }
}

export default Sell
