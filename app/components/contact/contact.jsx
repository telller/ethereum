import { Input, InputNumber, Icon, Row, Col } from 'antd'
import React, { Component } from 'react'
//import { connect } from 'react-redux'
//import PropTypes from 'prop-types'
import './contact.styl'

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      countSellDomain: 1,
      valueName: '',
      valueMail: '',
      valueComment: '',
      nameDomain: ''
    }
  }

  // clickSellAdd () {
  //   this.setState({countSellDomain: this.state.countSellDomain + 1})
  // }
  //
  // changeName (e) {
  //   this.props.send(e.target.value, 'CONTACT_NAME')
  //   this.setState({
  //     valueName: e.target.value
  //   })
  // }
  //
  // changeMail (e) {
  //   this.props.send(e.target.value, 'CONTACT_MAIL')
  //   this.setState({
  //     valueMail: e.target.value
  //   })
  // }
  //
  // changeComment (e) {
  //   this.props.send(e.target.value, 'CONTACT_COMMENT')
  //   this.setState({
  //     valueComment: e.target.value
  //   })
  // }
  //
  // changeDomain (e) {
  //   this.props.send(e.target.value, 'SEND_SELL_DOMAIN')
  //   this.setState({
  //     nameDomain: e.target.value
  //   })
  // }
  //
  // changePrice (e) {
  //   this.props.send(e, 'SEND_SELL_PRICE')
  //   this.setState({
  //     priceDomain: e.target.value
  //   })
  // }
  //
  // componentWillReceiveProps () {
  //   if (this.props.visible) {
  //     return
  //   }
  //   this.setState({
  //     countSellDomain: 1,
  //     valueName: '',
  //     valueMail: '',
  //     valueComment: '',
  //     nameDomain: ''
  //   })
  // }

  render () {
    // let arr = new Array(this.state.countSellDomain)
    // for (let i = 0; i < arr.length; i++) {
    //   arr[i] = 0
    // }
    return (
      <div id='contact'>
        <div className='form'>
          <Input placeholder='Name' prefix={<Icon type='user' />} value={this.state.valueName} onChange={e => this.changeName(e)} />
          <Input placeholder='Email' prefix={<Icon type='mail' />} value={this.state.valueMail} onChange={e => this.changeMail(e)} />
          <Input.TextArea
            placeholder='Comment'
            autosize={{ minRows: 4, maxRows: 6 }}
            value={this.state.valueComment}
            onChange={this.changeComment}
          />
        </div>
      </div>
    )
  }
}

// Contact.propTypes = {
//   send: PropTypes.func,
//   visible: PropTypes.bool
// }
//
// const mapStateToProps = state => ({
//   dataSend: state.sendSell,
//   contactInfo: state.contactInfo
// })
//
// const mapDispatchToProps = dispatch => ({
//   send: (payload, type) => {
//     dispatch({
//       type,
//       payload
//     })
//   }
// })

// const component = connect(mapStateToProps, mapDispatchToProps)(Contact)

export default Contact
