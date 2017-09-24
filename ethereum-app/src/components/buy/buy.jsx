import { Form, Icon, Input, InputNumber, Modal } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './buy.styl'

class Buy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMakeOffer: !Number(props.data.price)
    }
    this.onOk = this.onOk.bind(this)
  }
  onOk () {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.price = values.price || this.props.data.price
        values.domain = this.props.data.name
        this.props.onOk(values)
      }
    })
  }
  render () {
    return (
      <Modal
        className='buy-modal'
        width={400}
        visible
        title='Buy ENS:'
        onCancel={this.props.onCancel}
        footer={
          <div onClick={this.onOk}><Icon type='shopping-cart' /> | Buy</div>
        }
      >
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
            <Form>
              {this.state.isMakeOffer && <Form.Item>
                {this.props.form.getFieldDecorator('price', {
                  rules: [{ required: true, message: 'Please input your price!' }]
                })(<InputNumber placeholder='Price' prefix={<Icon type='wallet' />} min={0.01} step={0.01} />)}
              </Form.Item>}
              <Form.Item>
                {this.props.form.getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your name!' }]
                })(<Input placeholder='Name' prefix={<Icon type='user' />} />)}
              </Form.Item>
              <Form.Item>
                {this.props.form.getFieldDecorator('email', {
                  rules: [
                    { type: 'email', message: 'The input is not valid E-mail!' },
                    { required: true, message: 'Please input your E-mail!' }
                  ]
                })(<Input placeholder='E-mail' type='email' prefix={<Icon type='mail' />} />)}
              </Form.Item>
              <Form.Item>
                {this.props.form.getFieldDecorator('comment')(
                  <Input.TextArea placeholder='Comment' autosize={{ minRows: 4, maxRows: 6 }} />
                )}
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    )
  }
}
Buy.propTypes = {
  form: React.PropTypes.object,
  onCancel: PropTypes.func,
  data: PropTypes.object,
  onOk: PropTypes.func
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  send: (payload, type) => { dispatch({ type, payload }) }
})
export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(Buy))
