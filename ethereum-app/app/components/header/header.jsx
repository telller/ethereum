import React from 'react'
import { Row, Col, LocaleProvider } from 'antd'
import MainMenu from '../menu/menu.jsx'
import Search from '../search/search.jsx'
import ShareIcons from '../ShareIcons/ShareIcons.jsx'
import './header.styl'
import '../ShareIcons/HeaderShareIcons.styl'
import enUS from 'antd/lib/locale-provider/en_US'
import logo from 'media/logo.png'

class Header extends React.Component {
  render () {
    return (
      <header id='header'>
        <Row>
          <div className='title-logo'>
            <Col span={2} className='header-logo'>
              <img src={logo} />
            </Col>
            <Col span={6} >
              <h1 className='title'>ENS domains</h1>
            </Col>
          </div>
          <Col className='main-menu'>
            <MainMenu className='header-menu' />
            <ShareIcons className='header-share-icons header-share' />
          </Col>
          <div className='search-domains'>
            <LocaleProvider locale={enUS}>
              <Search />
            </LocaleProvider>
          </div>
        </Row>
      </header>
    )
  }
}

export default Header
