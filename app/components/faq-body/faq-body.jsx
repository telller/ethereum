import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './faq-body.styl'

class FaqBody extends Component {
  render () {
    return (
      <div id='faq-body'>
        <Row>
          <Col className='body'>
            <div className="title">
              <p>FAQ</p>
            </div>
            <div className="info">
              <ol>
                <li><strong>How do I know this isn't a scam?</strong> The source code of the ENS Seller Factory can be verified on <a href="https://etherscan.io/address/0x34abcc1fdedb49c953445c11a71e428d719ba8d9#code">Etherscan</a> and paranoid users can use its <a href="https://etherscan.io/address/0x34abcc1fdedb49c953445c11a71e428d719ba8d9#readContract">Read Contract</a> function to verify that the given Purchase Address is valid.</li>
                <li><strong>What do I actually get when I buy a name?</strong> Everything. The name's Deed is transferred to the buyer, the name's resolver is set to the <a href="https://etherscan.io/address/0x1da022710df5002339274aadee8d58218e9d6ab5#code">ENS Public Resolver</a>, and the resolver is configured to direct payments sent to the purchased name to your ETH address.</li>
                <li><strong>Why does the main page only have a spinning wheel?</strong> The server must be down. Send /u/cintix a message on reddit if you don't think they know already. </li>
                <li><strong>Why does the main page only have a spinning wheel?</strong> The server must be down. Send /u/cintix a message on reddit if you don't think they know already. </li>
                <li>What if I send too much/too little ETH? Any amount more than the name's price is refunded. If too little is sent, the transaction will fail and all the sent ETH will be refunded. </li>
                <li><strong>What if someone else buys the name before me?</strong> The transaction will fail and all the sent ETH will be refunded. </li>
                <li><strong>Why does my wallet say the transaction will fail?</strong> Make sure your wallet's fully synced. Otherwise, the name may have already been purchased by someone else, you're sending less ETH than the purchase price, or your wallet isn't calculate the gas costs properly. </li>
                <li><strong>How do I unlist the name I'm selling?</strong> The seller can buy their name back from the Purchase Address for 0 ETH. No fees for names that never sell. </li>
                <li><strong>How do I change the list price for the name I'm selling?</strong> To lower the price, just make a new contract with a lower price. To raise the price, you'll need to unlist the name, transfer it to a new account, then restart the sell process with the new price. A new account is needed to raise the price, as the older, lower-priced sell contract would take precedence otherwise. </li>
                <li><strong>Where can I donate?</strong> No donations necessary. The seller fees should be enough to keep the site running and the work developing the smart contracts was done for the betterment of the Ethereum community. Please consider instead donating to the <a href="https://ethereum.org/donate">Ethereum developers</a>. But if you absolutely refuse to be turned away, you can send donations to 0x4e6a1c57cdbfd97e8efe831f8f4418b1f2a09e6e </li>
              </ol>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default FaqBody
