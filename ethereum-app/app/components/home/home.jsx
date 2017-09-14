import Header from '../header/header.jsx'
import React, { Component } from 'react'
import { LocaleProvider } from 'antd'
import GraphTable from '../graph-table/table.jsx'
import enUS from 'antd/lib/locale-provider/en_US'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <LocaleProvider locale={enUS}><GraphTable /></LocaleProvider>
      </div>
    )
  }
}
export default Home
