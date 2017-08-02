import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './faq.styl'

class Faq extends Component {
  render () {
    return (
      <div id='faq-body'>
        <Row>
          <Col className='body'>
            <div className='info'>
              <ol>
                <li><strong>How do I know that it isn't a scam?</strong> How to spot a scam? The source code of the ENS Seller Factory can be verified on <a href='#' target='_blank'>Etherscan</a> and cautious users can use its <a href='#' target='_blank'>Read Contract</a> function to verify that the given Purchase Address is valid.</li>
                <li><strong>What do I actually get when I buy a name?</strong> What do I actually get when I buy a name? Everything. The name's Deed is transferred to the buyer, the name's resolver is set to the <a href='#' target='_blank'>ENS Public Resolver</a>, and the resolver is configured to direct payments sent to the purchased name to your ETH address.</li>
                <li><strong>Why does the main page have only a spinning wheel?</strong> The server must be down. Send a /u/cintix  message on reddit, if you think that they don’t know already.</li>
                <li><strong>What if I send too much/too little ETH? </strong> Any amount more than the name's price is refunded. If it is sent too little, the transaction will fail and all the sent ETH will be refunded. </li>
                <li><strong>What if someone else buys the name before me?</strong> The transaction will fail and all the sent ETH will be refunded. </li>
                <li><strong> Why does my wallet show that the transaction is fail?</strong> Make sure your wallet's fully synced. Otherwise, the name may have already been purchased by someone else, you're sending less ETH than the purchase price, or your wallet doesn't calculate the gas value properly. </li>
                <li><strong>How do I unlist the name I'm selling?</strong> The seller can buy their name back from the Purchase Address for 0 ETH. There is no fee for names that never would be sold. </li>
                <li><strong> How do I can sell my domain?</strong> If you want to sell your domain, click on the tab 'CONTACT US', enter your name, email and write what you exactly want to do in the comments. </li>
              </ol>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Faq
