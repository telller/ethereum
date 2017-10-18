import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Tag, Button, Icon } from 'antd'
import GoogleForm from 'google-form-send'
import Buy from '../buy/buy.jsx'
import ShareIcons from '../ShareIcons/ShareIcons.jsx'
import './SingleDomain.styl'
import imgDomain from 'media/Ethereum.png'

class SingleDomain extends Component {
  static propTypes = {
    data: PropTypes.object,
    onCancel: PropTypes.func
  }
  state = {
    isBuyModalVisible: false
  }
  buy = values => {
    let form = new GoogleForm('https://docs.google.com/forms/d/e/1FAIpQLSekDHkNfYUfFS0gKSBNbXKu3Exj5UPkYEgTGj_yOa7EjaV4AQ')
    const formData = {
      'entry.6737599': values.name,
      'entry.1387721178': values.email,
      'entry.1522767390': values.comment,
      'entry.1493658382': values.domain,
      'entry.1168806703': values.price
    }
    form.setAllFields(formData)
    form.send(true)

    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()

    const sendDataEmail = 'type=buy' +
      '&sender_name=' + encodeURIComponent(values.name) +
      '&sender_email=' + encodeURIComponent(values.email) +
      '&comment=' + encodeURIComponent(values.comment || ' ') +
      '&domain_name=' + encodeURIComponent(values.domain) +
      '&domain_price=' + encodeURIComponent(values.price)

    xhr.open('POST', '/wp-content/themes/ethereum_theme/sendEmail.php', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(sendDataEmail)

    Modal.success({
      title: 'Success',
      content: 'Our team will follow-up within next 24 hours',
      okText: 'OK'
    })
    this.setState({ isBuyModalVisible: false })
  }
  render () {
    return (
      <Modal
        className='domain-info-modal'
        width={500}
        visible
        title='Domain Info:'
        onCancel={this.props.onCancel}
        footer={false}
      >
        <div className='single-domain'>
          <img className='domain-logo' src={imgDomain} alt='Ethereum domain' />
          <h2 className='domain-name'>{this.props.data.name}</h2>
          {
            !!Number(this.props.data.price) && <div><b>Price:</b> {this.props.data.price} ETH</div>
          }
          <div className='domain-wallet'><b>Wallet:</b> {this.props.data.wallet}</div>
          {
            !!this.props.data.categories.length && (
              <div className='domain-categories'>
                <b>Categories:</b>
                {
                  this.props.data.categories.map(
                    (item, index) => <Tag key={index}>{item}</Tag>
                  )
                }
              </div>)
          }
          <div className='domain-buy'>
            <Button onClick={() => this.setState({visible: false, isBuyModalVisible: true})}>
              <Icon type='shopping-cart' />| Buy
            </Button>
          </div>
          <ShareIcons className='domain-share-icons' url={this.props.data.link} />
        </div>
        {
          this.state.isBuyModalVisible && (
            <Buy
              onOk={this.buy}
              onCancel={() => this.setState({isBuyModalVisible: false})}
              data={this.props.data}
            />)
        }
      </Modal>
    )
  }
}

export default SingleDomain
