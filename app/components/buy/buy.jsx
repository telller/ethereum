import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Input, Icon} from 'antd'
import './buy.styl'

class Buy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMakeOffer: props.data.isMakeOffer,
      valueMakeoffer: '',
      valueComment: '',
      valueName: '',
      valueMail: ''
    }
    this.changeMakeoffer = this.changeMakeoffer.bind(this)
    this.changeComment = this.changeComment.bind(this)
    this.changeMail = this.changeMail.bind(this)
    this.changeName = this.changeName.bind(this)
  }
  componentWillMount () {
    this.props.send(this.props.data.name, 'SEND_BUY_DOMAIN')
    this.props.send(this.props.data.price, 'SEND_BUY_PRICE')
  }
  changeMakeoffer (e) {
    this.props.send(e.target.value, 'CONTACT_MAKEOFFER')
    this.setState({
      valueMakeoffer: e.target.value
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
  render () {
    return (
      <div id='buy'>
        <table className='table-domains'>
          <tbody>
            <tr>
              <td className='name-title'>.eth NAME:</td>
              <td>{this.props.data.name}</td>
              {this.state.isMakeOffer || <td className='price'>{this.props.data.price}<span className='eth'>eth</span></td>}
            </tr>
          </tbody>
        </table>
        <div className='contact-form'>
          { this.state.isMakeOffer && <Input placeholder='Make offer' prefix={<Icon type='wallet' />} value={this.state.valueMakeoffer} onChange={this.changeMakeoffer} />}
          <Input placeholder='Name' prefix={<Icon type='user' />} value={this.state.valueName} onChange={this.changeName} />
          <Input placeholder='Email' type='email' prefix={<Icon type='mail' />} value={this.state.valueMail} onChange={this.changeMail} />
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

Buy.propTypes = {
  data: PropTypes.object,
  send: PropTypes.func
}

const mapStateToProps = state => ({
  contactInfo: state.contactInfo,
  dataSend: state.sendBuy
})

const mapDispatchToProps = dispatch => ({
  send: (payload, type) => { dispatch({ type, payload }) }
})

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy)

export default component
