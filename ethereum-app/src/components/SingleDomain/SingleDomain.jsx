import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Tag } from 'antd'
import ReactHtmlParser from 'react-html-parser'
import ShareIcons from '../ShareIcons/ShareIcons.jsx'
import './SingleDomain.styl'
import imgDomain from 'media/Ethereum.png'

class SingleDomain extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(imgDomain);
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
                  (item, index) => <Tag key={index} color='blue'>{item}</Tag>
                )
              }
            </div>)
          }
          <ShareIcons className='domain-share-icons' url={this.props.data.link} />
        </div>
      </Modal>
    )
  }
}

SingleDomain.propTypes = {
  data: PropTypes.object,
  onCancel: PropTypes.func
}

export default SingleDomain
