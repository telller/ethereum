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
      isContactVisible: false,
      visibleSell: false,
      visibleFaq: false,
      menuFold: false
    }
    this.contact = this.contact.bind(this)
  }
  clickSell () {
    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()
    xhr.open('GET', 'https://docs.google.com/forms/d/e/1FAIpQLSfWrpCsrjJfQFBYrl2KNqQlCcNNaS7WpnD5scQb6FnJWt7mLA/formResponse?ifq&entry.1842149868=' + this.props.contactInfo.name + '&entry.1596816766=' + this.props.contactInfo.mail + '&entry.873897670=' + this.props.contactInfo.comment + '&entry.1585848839=' + this.props.dataSell.domain + '&entry.255403866=' + this.props.dataSell.price + '&submit=Submit', true)
    xhr.send()
    Modal.success({
      title: 'Success',
      content: 'Our team will follow-up within next 24 hours',
      okText: 'OK'
    })

    this.setState({
      visibleSell: !this.state.visibleSell
    })
  }

  clickFAQ () {
    this.setState({
      visibleFaq: !this.state.visibleFaq
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
      isContactVisible: !this.state.isContactVisible
    })
  }

  clickMenu () {
    this.setState({
      menuFold: !this.state.menuFold
    })
  }

  render () {
    return (
      <div id='menu'>
        <div className='menu-fold' onClick={() => this.clickMenu()}>
          <img src={'../../../dist/media/' + (this.state.menuFold ? 'menu-icon-close.png' : 'menu-icon.png')} alt='Menu' />
        </div>
        <div className={'all-menu-items ' + (this.state.menuFold ? null : 'menu-unfold')}>
          <div className='menu-item' onClick={() => { this.setState({ visibleSell: true }) }}>
            <div className='text'><Icon type='shopping-cart' />Sell Names<span className='dot' /></div>
          </div>
          <div className='menu-item' onClick={() => { this.setState({ isContactVisible: true }) }}>
            <div className='text'><Icon type='mail' />Contact Us<span className='dot' /></div>
          </div>
          <div className='menu-item' onClick={() => this.clickFAQ()}>
            <div className='text'><Icon type='question-circle-o' />faq</div>
          </div>
        </div>

        <Modal
          title='Sell Names:'
          className='sell-modal'
          width={400}
          onCancel={() => { this.setState({ visibleSell: false }) }}
          visible={this.state.visibleSell}
          footer={
            <div onClick={() => this.clickSell()}><Icon type='shopping-cart' /> | Sell</div>
          }
        >
          <Sell visible={this.state.visibleSell} />
        </Modal>
        {
          this.state.isContactVisible && (
            <Contact onOk={this.contact} onCancel={() => this.setState({isContactVisible: false})} />
          )
        }
        <Modal
          title='FAQ'
          width={600}
          onCancel={() => this.clickFAQ()}
          visible={this.state.visibleFaq}
          footer={[
            <Button key='Ok' type='primary' size='large' onClick={() => this.clickFAQ()}>Ok</Button>
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
