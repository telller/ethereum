import React, { Component } from 'react'
import { Icon, Modal, Button } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Faq from '../faq/faq.jsx'
import Sell from '../sell/sell.jsx'
import Contact from '../contact/contact.jsx'
import './menu.styl'

class MainMenu extends Component {
  constructor () {
    super()
    this.state = {
      isContactModalVisible: false,
      isSellModalVisible: false,
      isFAQModalVisible: false,
      isFoldingMenu: false
    }
    this.contact = this.contact.bind(this)
    this.sell = this.sell.bind(this)
  }
  sell (values) {
    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()
    const data = 'https://docs.google.com/forms/d/e/1FAIpQLSfWrpCsrjJfQFBYrl2KNqQlCcNNaS7WpnD5scQb6FnJWt7mLA/formResponse?ifq&entry.1842149868=' +
      encodeURIComponent(values.name) +
      '&entry.1596816766=' + encodeURIComponent(values.email) +
      '&entry.873897670=' + encodeURIComponent(values.comment) +
      '&entry.1585848839=' + encodeURIComponent(values.domain) +
      '&entry.255403866=' + encodeURIComponent(values.price) +
      '&submit=Submit'
    xhr.open('GET', data, true)
    xhr.send()
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

  contact () {
  // TODO: Check save data in excel
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

  render () {
    return (
      <div id='menu'>
        <div className='menu-fold' onClick={() => this.menu()}>
          <img src={'../../../dist/media/' + (this.state.isFoldingMenu ? 'menu-icon-close.png' : 'menu-icon.png')} alt='Menu' />
        </div>
        <div className={'all-menu-items ' + (this.state.isFoldingMenu ? null : 'menu-unfold')}>
          <div className='menu-item' onClick={() => { this.setState({ isSellModalVisible: true }) }}>
            <div className='text'><Icon type='shopping-cart' />Sell Names<span className='dot' /></div>
          </div>
          <div className='menu-item' onClick={() => { this.setState({ isContactModalVisible: true }) }}>
            <div className='text'><Icon type='mail' />Contact Us<span className='dot' /></div>
          </div>
          <div className='menu-item' onClick={() => this.faq()}>
            <div className='text'><Icon type='question-circle-o' />faq</div>
          </div>
        </div>
        {
          this.state.isSellModalVisible && (
            <Sell onOk={this.sell} onCancel={() => this.setState({isSellModalVisible: false})} />
          ) ||
          this.state.isContactModalVisible && (
            <Contact onOk={this.contact} onCancel={() => this.setState({isContactModalVisible: false})} />
          )
        }
        <Modal
          title='FAQ'
          width={600}
          onCancel={() => this.faq()}
          visible={this.state.isFAQModalVisible}
          footer={[
            <Button key='Ok' type='primary' size='large' onClick={() => this.faq()}>Ok</Button>
          ]}
        >
          <Faq />
        </Modal>
      </div>
    )
  }
}

MainMenu.propTypes = {
  dataSell: PropTypes.object,
  contactInfo: PropTypes.object
}

const mapStateToProps = state => ({
  dataSell: state.sendSell,
  contactInfo: state.contactInfo
})

const component = connect(mapStateToProps, () => ({}))(MainMenu)

export default component
