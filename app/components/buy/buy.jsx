import { Form, Icon, Input, Modal } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './buy.styl'
const FormItem = Form.Item

class Buy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMakeOffer: props.data.isMakeOffer
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
              {this.state.isMakeOffer && <FormItem>
                {this.props.form.getFieldDecorator('price', {
                  rules: [{ required: true, message: 'Please input your price!' }]
                })(<Input placeholder='Price' prefix={<Icon type='wallet' />} />)}
              </FormItem>}
              <FormItem>
                {this.props.form.getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your name!' }]
                })(<Input placeholder='Name' prefix={<Icon type='user' />} />)}
              </FormItem>
            </Form>
            <Form>
              <FormItem>
                {this.props.form.getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }]
                })(<Input placeholder='Email' type='email' prefix={<Icon type='mail' />} />)}
              </FormItem>
            </Form>
            <Form>
              <FormItem>
                {this.props.form.getFieldDecorator('comment')(
                  <Input.TextArea placeholder='Comment' autosize={{ minRows: 4, maxRows: 6 }} />
                )}
              </FormItem>
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
  contactInfo: state.contactInfo,
  dataSend: state.sendBuy
})
const mapDispatchToProps = dispatch => ({
  send: (payload, type) => { dispatch({ type, payload }) }
})
export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(Buy))
