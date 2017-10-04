import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Modal } from 'antd'
import Faq from '../faq/faq.jsx'
import Sell from '../sell/sell.jsx'
import Contact from '../contact/contact.jsx'
import ShareIcons from '../ShareIcons/ShareIcons.jsx'
import GoogleForm from 'google-form-send'
import './menu.styl'
import menu_icon from 'media/menu-icon.png'
import menu_icon_close from 'media/menu-icon-close.png'

class MainMenu extends Component {
  constructor () {
    super()
    this.state = {
      isContactModalVisible: false,
      isSellModalVisible: false,
      isFAQModalVisible: false,
      isFoldingMenu: false
    }
  }
  static propTypes = {
    className: PropTypes.string
  }
  sell = values => {
    let form = new GoogleForm('https://docs.google.com/forms/d/e/1FAIpQLSfWrpCsrjJfQFBYrl2KNqQlCcNNaS7WpnD5scQb6FnJWt7mLA')
    const formData = {
      'entry.1842149868': values.name,
      'entry.1596816766': values.email,
      'entry.873897670': values.comment,
      'entry.1585848839': values.domain,
      'entry.255403866': values.price
    }
    form.setAllFields(formData)
    form.send(true)

    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()

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

  faq = () => {
    this.setState({
      isFAQModalVisible: !this.state.isFAQModalVisible
    })
  }

  contact = values => {
    let form = new GoogleForm('https://docs.google.com/forms/d/1TfXOZAqgFs34oDK1EeEI9XKE1cjIy9vReIoEhxvXVA4')
    const formData = {
      'entry.1632333745': values.name,
      'entry.58046248': values.email,
      'entry.927148489': values.comment
    }
    form.setAllFields(formData)
    form.send(true)

    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()

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

  menu = () => {
    this.setState({
      isFoldingMenu: !this.state.isFoldingMenu
    })
  }

  render () {
    return (
      <div id='menu' className={this.props.className}>
        <div className='menu-fold' onClick={this.menu}>
          <img src={this.state.isFoldingMenu ? menu_icon_close : menu_icon} alt='Menu icon' />
        </div>
        <div className={'all-menu-items ' + (this.state.isFoldingMenu ? '' : 'menu-unfold ')}>
          <div className='menu-item' onClick={() => { this.setState({ isSellModalVisible: true }) }}>
            <span className='text'><Icon type='shopping-cart' />Sell Names<span className='dot' /></span>
          </div>
          <div className='menu-item' onClick={() => { this.setState({ isContactModalVisible: true }) }}>
            <span className='text'><Icon type='mail' />Contact Us<span className='dot' /></span>
          </div>
          <div className='menu-item' onClick={this.faq}>
            <span className='text'><Icon type='question-circle-o' />faq</span>
          </div>
        </div>
        <ShareIcons className={'header-share-icons ' + (this.state.isFoldingMenu ? '' : 'hidden-display')} />
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
            <Faq onCancel={this.faq} />
          )
        }
      </div>
    )
  }
}

export default MainMenu
