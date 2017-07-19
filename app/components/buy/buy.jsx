import React, { Component } from 'react'
import {Input, Icon} from 'antd'
import './buy.styl'

class Buy extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div id='buy'>
        {/* <p>.eth NAME: {this.props.data.name} <span className='price'>{this.props.data.price} <span className='eth'>ETH</span></span></p> */}
        <table className='table-domains'>
          <tbody>
            <tr>
              <td className='name-title'>.eth NAME:</td>
              <td>{this.props.data.name}</td>
              <td className='price'>{this.props.data.price}<span className='eth'>eth</span></td>
            </tr>
          </tbody>
        </table>
        <div className='contact-form'>
          <Input placeholder='Name' prefix={<Icon type='user' />} />
          <Input placeholder='Email' prefix={<Icon type='mail' />} />
          <Input.TextArea
            placeholder='Comment'
            autosize={{ minRows: 4, maxRows: 6 }}
          />
        </div>
      </div>
    )
  }
}
export default Buy
