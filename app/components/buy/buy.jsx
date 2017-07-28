import React, { Component } from 'react'
import {Input, Icon} from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './buy.styl'

class Buy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valueName: '',
      valueMail: '',
      valueComment: ''
    }
  }
  
  changeName (e) {
    this.props.dataBuy(e.target.value, 'SEND_BUY_NAME')
    this.setState({
      valueName: e.target.value
    })
  }

  changeMail (e) {
    this.props.dataBuy(e.target.value, 'SEND_BUY_MAIL')
    this.setState({
      valueMail: e.target.value
    })
  }

  changeComment (e) {
    this.props.dataBuy(e.target.value, 'SEND_BUY_COMMENT')
    this.setState({
      valueComment: e.target.value
    })
  }

  componentWillMount () {
    this.props.dataBuy(this.props.data.name, 'SEND_BUY_DOMAIN')
    this.props.dataBuy(this.props.data.price, 'SEND_BUY_PRICE')
  }

  componentWillReceiveProps (visible) {
    if (this.props.visible) {
      return
    }
    this.setState({
      valueName: '',
      valueMail: '',
      valueComment: ''
    })
  }

  render () {
    return (
      <div id='buy'>
        <table className='table-domains'>
          <tbody>
            {
              <tr>
                <td className='name-title'>.eth NAME:</td>
                <td>{this.props.data.name}</td>
                <td className='price'>{this.props.data.price}<span className='eth'>eth</span></td>
              </tr>
            }
          </tbody>
        </table>
        <div className='contact-form'>
          <Input placeholder='Name' prefix={<Icon type='user' />} value={this.state.valueName} onChange={e => this.changeName(e)} />
          <Input placeholder='Email' type='email' prefix={<Icon type='mail' />} value={this.state.valueMail} onChange={e => this.changeMail(e)} />
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
  data: PropTypes.object
}

const mapStateToProps = state => {
  return {
    dataSend: state.sendBuy
  }
}

const mapDispatchToProps = dispatch => ({
  dataBuy: (data, type) => {
    dispatch({
      type,
      payload: data
    })
  }
})

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy)

export default component
