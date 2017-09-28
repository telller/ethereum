import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import './ShareIcons.styl'

class ShareIcons extends React.Component {
  static defaultProps = {
    url: location.origin,
    title: 'Buy or Sell ENS .eth Domains. Blockchain Domains Market.'
  }
  static propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string
  }
  facebook = () => {
    const url = ('http://www.facebook.com/sharer.php?s=100' + '&u=' + encodeURIComponent(this.props.url))
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436')
  }
  twitter = () => {
    const url = 'http://twitter.com/share?' + 'text=' + encodeURIComponent(this.props.title) + '&url=' + encodeURIComponent(this.props.url) + '&counturl=' + encodeURIComponent(this.props.url)
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436')
  }
  googleplus = () => {
    const url = 'https://plus.google.com/share?' + 'text=' + encodeURIComponent(this.props.title) + '&url=' + encodeURIComponent(this.props.url) + '&counturl=' + encodeURIComponent(this.props.url)
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436')
  }
  render () {
    return (
      <div className={'share-icons ' + (this.props.className ? this.props.className : '')}>
        <Button onClick={this.facebook} className='icon-default icon-facebook icon-visible'>
          <i className='fa fa-facebook' aria-hidden='true' />
        </Button>
        <Button onClick={this.twitter} className='icon-default icon-twitter icon-visible'>
          <i className='fa fa-twitter' aria-hidden='true' />
        </Button>
        <Button onClick={this.googleplus} className='icon-default icon-google-plus icon-visible'>
          <i className='fa fa-google-plus' aria-hidden='true' />
        </Button>
      </div>
    )
  }
}

export default ShareIcons
