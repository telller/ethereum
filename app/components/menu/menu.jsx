import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import './menu.styl'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      faq: 'faq',
      grafs: 'grafs',
      buy: 'buy',
      sell: 'sell'
    }
  }
  hendleStatusFaq () {
    this.props.onHandleMenuFaq()
    browserHistory.push('/faq')
  }
  hendleStatusGraph () {
    this.props.onHandleMenuGraph()
    browserHistory.push('/')
  }
  hendleStatusSell () {
    this.props.onHandleMenuSell()
    browserHistory.push('/sell')
  }
  hendleStatusBuy () {
    this.props.onHandleMenuBuy()
    browserHistory.push('/buy')
  }
  render () {
    return (
      <div id='menu'>
        <Link onClick={() => this.hendleStatusFaq()}>
          <div className={this.props.menu.faqStatus ? 'menu-item-active' : 'menu-item'}>
            <img src={this.props.menu.faqStatus ? './dist/media/faq-active.png' : './dist/media/faq.png'} />
            <div className='text-center'>faq</div>
          </div>
        </Link>
        <Link onClick={() => this.hendleStatusGraph()} >
          <div className={this.props.menu.graphStatus ? 'menu-item-active' : 'menu-item'}>
            <img src={this.props.menu.graphStatus ? './dist/media/home-active.png' : './dist/media/home.png'} />
            <div className='text'>home</div>
          </div>
        </Link>
        <Link onClick={() => this.hendleStatusBuy()} >
          <div className={this.props.menu.buyStatus ? 'menu-item-active' : 'menu-item'}>
            <img src={this.props.menu.buyStatus ? './dist/media/buy-active.png' : './dist/media/buy.png'} />
            <div className='text-center'>buy</div>
          </div>
        </Link>
        <Link onClick={() => this.hendleStatusSell()} activeClassName='active' >
          <div className={this.props.menu.sellStatus ? 'menu-item-active' : 'menu-item'}>
            <img src={this.props.menu.sellStatus ? './dist/media/sell-active.png' : './dist/media/sell.png'} />
            <div className='text-sell'>sell</div>
          </div>
        </Link>
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
  },
  onHandleMenuGraph: () => {
    dispatch({
      type: 'HANDLE_MENU_GRAPH',
      payload: ''
    })
  },
  onHandleMenuBuy: () => {
    dispatch({
      type: 'HANDLE_MENU_BUY',
      payload: ''
    })
  },
  onHandleMenuSell: () => {
    dispatch({
      type: 'HANDLE_MENU_SELL',
      payload: ''
    })
  }
})

Menu.propTypes = {
  onHandleMenuFaq: PropTypes.func,
  onHandleMenuGraph: PropTypes.func,
  onHandleMenuBuy: PropTypes.func,
  onHandleMenuSell: PropTypes.func,
  menu: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
