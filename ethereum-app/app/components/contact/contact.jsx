import { Input, Icon, Form, Modal } from 'antd'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.styl'

class Contact extends Component {
  static propTypes = {
    form: React.PropTypes.object,
    onCancel: PropTypes.func,
    onOk: PropTypes.func
  }
  onOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onOk(values)
      }
    })
  }
  render () {
    return (
      <Modal
        className='contact-modal'
        width={400}
        visible
        title='Contact Us'
        onCancel={this.props.onCancel}
        footer={
          <div onClick={this.onOk}><Icon type='message' /> | Send</div>
        }
      >
        <div id='contact'>
          <div className='form'>
            <Form>
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

export default Form.create()(Contact)
