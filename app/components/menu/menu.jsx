import React, { Component } from 'react'
import { Link } from 'react-router'
import {Icon, Modal, Button} from 'antd'
import FaqBody from '../body-main-components/faq-body.jsx'
import './menu.styl'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      visibleSell: false,
      visibleFaq: false,
      visibleContact: false
    }
  }
  clickSell () {
    this.setState({
      visibleSell: !this.state.visibleSell
    })
  }

  clickFAQ () {
    this.setState({
      visibleFaq: !this.state.visibleFaq
    })
  }

  clickContact () {
    this.setState({
      visibleContact: !this.state.visibleContact
    })
  }

  render () {
    return (
      <div id='menu'>
        <Link onClick={() => this.clickSell()}>
          <div className='menu-item'>
            <div className='text'><Icon type='shopping-cart' />Sell Names<span className='dot' /></div>
          </div>
        </Link>
        <Modal
          title='Sell Names'
          width={600}
          onCancel={() => this.clickSell()}
          visible={this.state.visibleSell}
          footer={[
            <Button key='Ok' type='primary' size='large' onClick={() => this.clickSell()}>Ok</Button>
          ]}
        >
          Sell Names
        </Modal>

        <Link onClick={() => this.clickFAQ()}>
          <div className='menu-item'>
            <div className='text'><Icon type='question-circle' />faq<span className='dot' /></div>
          </div>
        </Link>
        <Modal
          title='FAQ'
          width={600}
          onCancel={() => this.clickFAQ()}
          visible={this.state.visibleFaq}
          footer={[
            <Button key='Ok' type='primary' size='large' onClick={() => this.clickFAQ()}>Ok</Button>
          ]}
        >
          <FaqBody />
        </Modal>

        <Link onClick={() => this.clickContact()}>
          <div className='menu-item'>
            <div className='text'><Icon type='mail' />Contact Us</div>
          </div>
        </Link>
        <Modal
          title='Contact Us'
          width={600}
          onCancel={() => this.clickContact()}
          visible={this.state.visibleContact}
          footer={[
            <Button key='Ok' type='primary' size='large' onClick={() => this.clickContact()}>Ok</Button>
          ]}
        >
          Contact Us
        </Modal>
      </div>
    )
  }
}

export default Menu
