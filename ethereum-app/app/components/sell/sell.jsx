import { Input, InputNumber, Icon, Row, Col, Modal, Form } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './sell.styl'

class Sell extends Component {
  static propTypes = {
    onOk: PropTypes.func,
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    form: PropTypes.object
  }
  onOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onOk(values)
      }
    })
  }
  componentWillReceiveProps = () => {
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
    return (
      <Modal
        title='Sell Names:'
        className='sell-modal'
        width={400}
        visible
        onCancel={this.props.onCancel}
        footer={
          <div onClick={this.onOk}><Icon type='shopping-cart' /> | Sell</div>
        }
      >
        <div id='sell'>
          <Form className='form'>
            <Form.Item>
              {
                this.props.form.getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your name!' }]
                })(<Input placeholder='Name' prefix={<Icon type='user' />} />)
              }
            </Form.Item>
            <Form.Item>
              {
                this.props.form.getFieldDecorator('email', {
                  rules: [
                    { type: 'email', message: 'The input is not valid E-mail!' },
                    { required: true, message: 'Please input your E-mail!' }
                  ]
                })(<Input placeholder='E-mail' prefix={<Icon type='mail' />} />)
              }
            </Form.Item>
            <Row className='sell-domain'>
              <Col span={18}>
                <Form.Item>
                  {
                    this.props.form.getFieldDecorator('domain', {
                      rules: [
                        { min: 7, whitespace: true, message: 'The input is not valid Domain Name!' },
                        { required: true, message: 'Please input your Domain Name!' }
                      ]
                    })(<Input placeholder='Domain Name' />)
                  }
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  {
                    this.props.form.getFieldDecorator('price', {
                      rules: [{ required: true, message: 'Please input your price!' }]
                    })(<InputNumber placeholder='Price' min={0.01} step={0.01} />)
                  }
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              {
                this.props.form.getFieldDecorator('comment')(
                  <Input.TextArea placeholder='Comment' autosize={{ minRows: 4, maxRows: 6 }} />
                )
              }
            </Form.Item>
          </Form>
        </div>
      </Modal>
    )
  }
}

export default Form.create()(Sell)
