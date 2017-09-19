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
  email (purl, ptitle) {
    this.state.url = 'mailto:?' + 'subject=' + 'I wanted you to see this site;' + '&body=' + encodeURIComponent(purl) + 'text=' + encodeURIComponent(ptitle)
    window.open(this.state.url, '', 'toolbar=0,status=0,width=626,height=436')
  }
  render () {
    return (
      <div className={'share-icons ' + (this.props.className ? this.props.className : '')}>
        <Button onClick={() => this.facebook(this.props.url, this.props.title)} className={this.state.showIcons
              ? 'icon-default icon-facebook icon-visible'
              : 'icon-default icon-facebook'}>
          <i className='fa fa-facebook' aria-hidden='true' />
        </Button>
        <Button onClick={() => this.twitter(this.props.url, this.props.title)} className={this.state.showIcons
              ? 'icon-default icon-twitter icon-visible'
              : 'icon-default icon-twitter'}>
          <i className='fa fa-twitter' aria-hidden='true' />
        </Button>
        <Button onClick={() => this.googleplus(this.props.url, this.props.title)} className={this.state.showIcons
              ? 'icon-default icon-google-plus icon-visible'
              : 'icon-default icon-google-plus'}>
          <i className='fa fa-google-plus' aria-hidden='true' />
        </Button>
      </div>
    )
  }
}

ShareIcons.defaultProps = {
  title: 'Ensdomains - site for buying ENS domains'
}

ShareIcons.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}

export default ShareIcons
