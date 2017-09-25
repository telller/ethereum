import React, { Component } from 'react'
import { Icon, Modal } from 'antd'
import Faq from '../faq/faq.jsx'
import Sell from '../sell/sell.jsx'
import Contact from '../contact/contact.jsx'
import ShareIcons from '../ShareIcons/ShareIcons.jsx'
import './menu.styl'
import menu_icon from '../../../dist/media/menu-icon.png'
import menu_icon_close from '../../../dist/media/menu-icon-close.png'

class MainMenu extends Component {
  constructor () {
    super()
    this.state = {
      isContactModalVisible: false,
      isSellModalVisible: false,
      isFAQModalVisible: false,
      isShareVisible: true,
      isFoldingMenu: false
    }
    this.contact = this.contact.bind(this)
    this.sell = this.sell.bind(this)
  }
  sell (values) {
    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()

    const sendDataGoogle = 'https://docs.google.com/forms/d/e/1FAIpQLSfWrpCsrjJfQFBYrl2KNqQlCcNNaS7WpnD5scQb6FnJWt7mLA/formResponse?ifq' +
      '&entry.1842149868=' + encodeURIComponent(values.name) +
      '&entry.1596816766=' + encodeURIComponent(values.email) +
      '&entry.873897670=' + encodeURIComponent(values.comment) +
      '&entry.1585848839=' + encodeURIComponent(values.domain) +
      '&entry.255403866=' + encodeURIComponent(values.price) +
      '&submit=Submit'
    xhr.open('GET', sendDataGoogle, true)
    xhr.send()

    const sendDataEmail = 'type=sell' +
      '&sender_name=' + encodeURIComponent(values.name) +
      '&sender_email=' + encodeURIComponent(values.email) +
      '&comment=' + encodeURIComponent(values.comment) +
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

    this.setState({
      isSellModalVisible: !this.state.isSellModalVisible
    })
  }

  faq () {
    this.setState({
      isFAQModalVisible: !this.state.isFAQModalVisible
    })
  }

  contact (values) {
    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()

    const sendDataGoogle = 'https://docs.google.com/forms/d/1TfXOZAqgFs34oDK1EeEI9XKE1cjIy9vReIoEhxvXVA4/formResponse?ifq' +
      '&entry.1632333745=' + encodeURIComponent(values.name) +
      '&entry.58046248=' + encodeURIComponent(values.email) +
      '&entry.927148489=' + encodeURIComponent(values.comment) +
      '&submit=Submit'

    xhr.open('GET', sendDataGoogle, true)
    xhr.send()

    const sendDataEmail = 'type=contact' +
      '&sender_name=' + encodeURIComponent(values.name) +
      '&sender_email=' + encodeURIComponent(values.email) +
      '&comment=' + encodeURIComponent(values.comment)

    xhr.open('POST', '/wp-content/themes/ethereum_theme/sendEmail.php', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(sendDataEmail)

    Modal.success({
      title: 'Success',
      content: 'Our team will follow-up within next 24 hours',
      okText: 'OK'
    })
    this.setState({
      isContactModalVisible: !this.state.isContactModalVisible
    })
  }

  menu () {
    this.setState({
      isFoldingMenu: !this.state.isFoldingMenu
    })
  }

  handleShareVisible () {
    this.setState(
      (prevState, props) => {
        return { isShareVisible: !prevState.isShareVisible }
      }
    )
  }

  render () {
    return (
      <div id='menu'>
        <div className='menu-fold' onClick={() => this.menu()}>
          <img src={this.state.isFoldingMenu ? menu_icon_close : menu_icon} alt='Menu icon' />
        </div>
        <div className={'all-menu-items ' + (this.state.isFoldingMenu ? '' : 'menu-unfold ')}>
          <div className='menu-item' onClick={() => { this.setState({ isSellModalVisible: true }) }}>
            <div className='text'><Icon type='shopping-cart' />Sell Names<span className='dot' /></div>
          </div>
          <div className='menu-item' onClick={() => { this.setState({ isContactModalVisible: true }) }}>
            <div className='text'><Icon type='mail' />Contact Us<span className='dot' /></div>
          </div>
          <div className='menu-item' onClick={() => this.faq()}>
            <div className='text'><Icon type='question-circle-o' />faq<span className='dot' /></div>
          </div>
          <div className={'menu-item ' + (this.state.isFoldingMenu ? 'hidden-display' : '')}>
            <div className='text'><Icon type='share-alt' className='menu-share' onClick={() => this.handleShareVisible()} /></div>
          </div>
          <ShareIcons className={'menu-share-icons ' + (this.state.isShareVisible && !this.state.isFoldingMenu ? 'hidden-display' : '')} />
        </div>
        {
          this.state.isSellModalVisible && (
            <Sell onOk={this.sell} onCancel={() => this.setState({isSellModalVisible: false})} />
          )
        }
        {
          this.state.isContactModalVisible && (
            <Contact onOk={this.contact} onCancel={() => this.setState({isContactModalVisible: false})} />
          )
        }
        {
          this.state.isFAQModalVisible && (
            <Faq onCancel={() => this.faq()} />
          )
        }
      </div>
    )
  }
}

export default MainMenu
