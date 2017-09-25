import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import './ShareIcons.styl'

class ShareIcons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: ''
    }
  }
  facebook (purl, ptitle) {
    this.state.url = ('http://www.facebook.com/sharer.php?s=100' + '&title=' + encodeURIComponent(ptitle) + '&u=' + encodeURIComponent(purl))
    window.open(this.state.url, '', 'toolbar=0,status=0,width=626,height=436')
  }
  twitter (purl, ptitle) {
    this.state.url = 'http://twitter.com/share?' + 'text=' + encodeURIComponent(ptitle) + '&url=' + encodeURIComponent(purl) + '&counturl=' + encodeURIComponent(purl)
    window.open(this.state.url, '', 'toolbar=0,status=0,width=626,height=436')
  }
  googleplus (purl, ptitle) {
    this.state.url = 'https://plus.google.com/share?' + 'text=' + encodeURIComponent(ptitle) + '&url=' + encodeURIComponent(purl) + '&counturl=' + encodeURIComponent(purl)
    window.open(this.state.url, '', 'toolbar=0,status=0,width=626,height=436')
  }
  render () {
    return (
      <div className={'share-icons ' + (this.props.className ? this.props.className : '')}>
        <Button onClick={() => this.facebook(this.props.url, this.props.title)} className={'icon-default icon-facebook ' + (this.state.showIcons ? 'icon-visible' : '')}>
          <i className='fa fa-facebook' aria-hidden='true' />
        </Button>
        <Button onClick={() => this.twitter(this.props.url, this.props.title)} className={'icon-default icon-twitter ' + (this.state.showIcons ? 'icon-visible' : '')}>
          <i className='fa fa-twitter' aria-hidden='true' />
        </Button>
        <Button onClick={() => this.googleplus(this.props.url, this.props.title)} className={'icon-default icon-google-plus ' + (this.state.showIcons ? 'icon-visible' : '')}>
          <i className='fa fa-google-plus' aria-hidden='true' />
        </Button>
      </div>
    )
  }
}

ShareIcons.defaultProps = {
  url: location.origin,
  title: 'Buy or Sell ENS .eth Domains. Blockchain Domains Market.'
}

ShareIcons.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}

export default ShareIcons
