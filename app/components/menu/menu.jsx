import React, { Component } from 'react'
import { Icon, Modal, Button } from 'antd'
import Faq from '../faq/faq.jsx'
import './menu.styl'

class MainMenu extends Component {
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
        <Button className='folding-menu'>Menu<Icon type='menu-unfold' /></Button>
        <div className='all-menu-items'>
          <div className='menu-item' onClick={() => this.clickSell()}>
            <div className='text'><Icon type='shopping-cart' />Sell Names<span className='dot' /></div>
          </div>

          <div className='menu-item' onClick={() => this.clickFAQ()}>
            <div className='text'><Icon type='question-circle' />faq<span className='dot' /></div>
          </div>

          <div className='menu-item' onClick={() => this.clickContact()}>
            <div className='text'><Icon type='mail' />Contact Us</div>
          </div>
        </div>

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

export default MainMenu
