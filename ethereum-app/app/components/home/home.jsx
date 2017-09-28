import Header from '../header/header.jsx'
import React, { Component } from 'react'
import { LocaleProvider } from 'antd'
import PropTypes from 'prop-types'
import GraphTable from '../table/table.jsx'
import enUS from 'antd/lib/locale-provider/en_US'

class Home extends Component {
  static propTypes = {
    params: PropTypes.object
  }
  render () {
    return (
      <div>
        <Header />
        <LocaleProvider locale={enUS}><GraphTable domain={this.props.params.domain ? this.props.params.domain : 'home'} /></LocaleProvider>
      </div>
    )
  }
}

export default Home
