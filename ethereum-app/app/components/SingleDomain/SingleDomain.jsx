import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import ReactHtmlParser from 'react-html-parser'
import ShareIcons from '../ShareIcons/ShareIcons.jsx'
import './SingleDomain.styl'

class SingleDomain extends Component {
  constructor (props) {
    super(props)
    this.imgDomain = 'https://ensdomains.market/wp-content/uploads/2017/09/Ethereum.png'
  }

  render () {
    return (
      <Modal
        className='domain-info-modal'
        width={600}
        visible
        title='Domain Info:'
        onCancel={this.props.onCancel}
        footer={false}
      >
        <div className='single-domain'>
          <img className='domain-logo' src={this.imgDomain} alt='Ethereum domain' />
          <h2 className='domain-name'>{this.props.data.name}</h2>
          <ShareIcons className='domain-share-icons' url={location.href} />
          {
            !!Number(this.props.data.price) && <div><b>Price:</b> {this.props.data.price} ETH</div>
          }
          <div className='domain-wallet'><b>Wallet:</b> {this.props.data.wallet}</div>
          {
            !!this.props.data.categories.length && (
            <div className='domain-categories'>
              <b>Categories:</b>
              <ul className='domain-list-categories'>
                {
                  this.props.data.categories.map(
                    (item, index) => <li key={index}>{item}</li>
                  )
                }
              </ul>
            </div>)
          }
          <div className='domain-description'>
            <b>Description:</b>
            <div className='domain-text-description'>
              {ReactHtmlParser(this.props.data.description)}
            </div>
          </div>
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
