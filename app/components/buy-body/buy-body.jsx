import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './buy-body.styl'

class BuyBody extends Component {
  constructor () {
    super()
    this.state = {
      buy: 'buy'
    }
  }
  render () {
    return (
      <div id='buy-body'>
        <Row>
          <Col className='body'>
            <div className='title'>
              <p>How to Buy</p>
            </div>
            <div className='info'>
              <p className='info-title'>TL;DR: Just send ETH to the Purchase Address of the name you want!</p>
              <ol>
                <li>
                  Pick a name you like from the list on the main page. For example: rumours.eth
                  <img src='./dist/media/buy-photo.png' />
                </li>
                <li>
                  Send the amount of ETH shown under Price to the address given under Purchase Address.
                  In this example, you would send at least .05 ETH to 0x123lqowemqwo4e012i.
                </li>
                <li>
                  Verify the transaction went through and that the name belongs to you on <a href="#" target='_blank'>Etherscan</a>.
                  <img src='./dist/media/buy-photo2.png' />
                </li>
                <li>
                   Congratulations! Your friends can now easily send you ETH! And if at some point you don't like your name anymore, you can always resell it on here or wait 1 year and claim the at least .01 ETH locked in its deed by releasing the name. Congratulations! Your friends can now easily send you ETH! And if at some point you don't like your name anymore, you can always resell it on here or wait
                    1 year and claim the at least .01 ETH locked in its deed by releasing the name.
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default BuyBody
