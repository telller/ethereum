import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link, browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './sell-body.styl'

class SellBody extends Component {
  constructor(props) {
    super(props);

  }

  hendleStatusFaq () {
    browserHistory.push('/faq')
    this.props.onHandleMenuFaq()
  }
  render () {
    return (
      <div id='sell-body'>
        <Row>
          <Col className='body'>
            <div className='title'>
              <p>How to Sell</p>
            </div>
            <div className='info'>
              <ol>
                <li>Read through this page and the <Link onClick={() => this.hendleStatusFaq()}>FAQ</Link> to avoid some potential pitfalls. </li>
                <li>Add the <a href='https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef#code' target='_blank'>ENS Registrar</a> and the <a href='https://etherscan.io/address/0x34abcc1fdedb49c953445c11a71e428d719ba8d9#code' target='_blank'>ENS Seller Factory</a> to your watched contracts. </li>
                <li>Find the name you want to sell's LabelHash using <a href='http://etherscan.io/enslookup' target='_blank'>Etherscan</a>.</li>
                <li>From the address that owns the name, call the ENS Seller Factory's "createSellENS" function on the name string and the price in Wei. For example, createSellENS("rumours", 1000000000000000000) creates a sell contract for rumours.eth at a price of 1 ETH. </li>
                <li>Call the ENS Registrar's "transfer" function on the LabelHash and the ENS Seller Factory's address <span className='word-wrap'>0x34abcc1fdedb49c953445c11a71e428d719ba8d9)</span> to transfer ownership to the ENS Seller Factory. </li>
                <li>Wait a few minutes for the listings to update before refreshing to verify that your name is listed.</li>
              </ol>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    router: state.router,
    blog: state.blog,
    menu: state.menu
  }
}
const mapDispatchToProps = dispatch => ({
  onHandleMenuFaq: () => {
    dispatch({
      type: 'HANDLE_MENU_FAQ',
      payload: ''
    })
  }
})

SellBody.propTypes = {
  onHandleMenuFaq: PropTypes.func,
  onHandleMenuGraph: PropTypes.func,
  onHandleMenuBuy: PropTypes.func,
  onHandleMenuSell: PropTypes.func,
  menu: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(SellBody)
