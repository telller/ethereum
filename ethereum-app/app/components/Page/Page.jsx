import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Page.styl'

class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div id={this.props.id} className={'page ' + (this.props.className ? this.props.className : '')}>
        {this.props.children}
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string
}

export default Page
