import React, { Component } from 'react'
import {Input, InputNumber, Icon, Row, Col, Button} from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './sell.styl'

class Sell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      countSellDomain: 1,
      valueName: '',
      valueMail: '',
      valueComment: '',
      nameDomain: ''
    }
  }

  clickSellAdd () {
    this.setState({
      countSellDomain: this.state.countSellDomain + 1
    })
  }

  changeName (e) {
    this.props.send(e.target.value, 'CONTACT_NAME')
    this.setState({
      valueName: e.target.value
    })
  }

  changeMail (e) {
    this.props.send(e.target.value, 'CONTACT_MAIL')
    this.setState({
      valueMail: e.target.value
    })
  }

  changeComment (e) {
    this.props.send(e.target.value, 'CONTACT_COMMENT')
    this.setState({
      valueComment: e.target.value
    })
  }

  changeDomain (e) {
    this.props.send(e.target.value, 'SEND_SELL_DOMAIN')
    this.setState({
      nameDomain: e.target.value
    })
  }

  changePrice (e) {
    this.props.send(e, 'SEND_SELL_PRICE')
    this.setState({
      priceDomain: e.target.value
    })
  }

  componentWillReceiveProps (visible) {
    if (this.props.visible) {
      return
    }
    this.setState({
      countSellDomain: 1,
      valueName: '',
      valueMail: '',
      valueComment: '',
      nameDomain: ''
    })
  }

  render () {
    // let arr = new Array(this.state.countSellDomain)
    // for (let i = 0; i < arr.length; i++) {
    //   arr[i] = 0
    // }
    return (
      <div id='sell'>
        <div className='form'>
          <Input placeholder='Name' prefix={<Icon type='user' />} value={this.state.valueName} onChange={e => this.changeName(e)} />
          <Input placeholder='Email' prefix={<Icon type='mail' />} value={this.state.valueMail} onChange={e => this.changeMail(e)} />
          {/* {
            arr.map((item, index) => ( */}
          <Row className='sell-domain'>
            <Col span={18}>
              <Input placeholder='Domain Name' value={this.state.nameDomain} onChange={e => this.changeDomain(e)} />
            </Col>
            <Col span={6}>
              <InputNumber
                placeholder='Price'
                min={0.01}
                step={0.01}
                onChange={e => this.changePrice(e)}
              />
            </Col>
          </Row>
          {/* ))
          //} 
          <Row className='btn-add'>
            <Button shape='circle' icon='plus' onClick={() => this.clickSellAdd()} />
          </Row> */}
          <Input.TextArea
            placeholder='Comment'
            autosize={{ minRows: 4, maxRows: 6 }}
            value={this.state.valueComment}
            onChange={e => this.changeComment(e)}
          />
        </div>
      </div>
    )
  }
}

Sell.propTypes = {
  dataSend: PropTypes.object,
  contactInfo: PropTypes.object,
  send: PropTypes.func,
  visible: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    dataSend: state.sendSell,
    contactInfo: state.contactInfo
  }
}

const mapDispatchToProps = dispatch => ({
  send: (data, type) => {
    dispatch({
      type,
      payload: data
    })
  }
})

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sell)

export default component
