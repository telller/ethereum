import Header from '../header/header.jsx'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LocaleProvider } from 'antd'
import PropTypes from 'prop-types'
import WooCommerce from '../WooCommerce/WooCommerce.js'
import GraphTable from '../table/table.jsx'
import Footer from '../footer/footer.jsx'
import Domain from '../Domain.jsx'
import enUS from 'antd/lib/locale-provider/en_US'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      domain: null
    }
  }

  static propTypes = {
    data: PropTypes.array,
    params: PropTypes.object.isRequired,
    onLoadDomains: PropTypes.func.isRequired,
    onLoadCategories: PropTypes.func.isRequired
  }
  componentWillMount = () => {
    this.props.onLoadDomains()
    this.props.onLoadCategories()

    if (this.props.params.domain && this.props.data) {
      let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
      let xhr = new XHR()

      const sendNameDomain = 'name=' + this.props.params.domain

      xhr.open('POST', '/wp-content/themes/ethereum_theme/getDomainID.php', true)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(sendNameDomain)

      xhr.onload = () => {
        xhr.responseText && WooCommerce.getAsync('products/' + xhr.responseText).then(item => {
          this.setState({
            domain: new Domain(JSON.parse(item.toJSON().body))
          })
        })
      }
    }
  }
  render () {
    return (
      <div>
        <Header />
        <LocaleProvider locale={enUS}>
          <GraphTable domain={this.state.domain} />
        </LocaleProvider>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  onLoadDomains: () => {
    const addDomains = () => {
      return dispatch => {
        WooCommerce.getAsync('products?per_page=100').then(item => {
          dispatch({
            type: 'SET_LIST_DOMAINS',
            payload: JSON.parse(item.toJSON().body)
          })
        })
      }
    }
    dispatch(addDomains())
  },
  onLoadCategories: () => {
    const addCategories = () => {
      return dispatch => {
        WooCommerce.getAsync('products/categories?per_page=100').then(categories => {
          const payload = JSON.parse(categories.toJSON().body).map(item => {
            let tmp = {}
            tmp.text = item.name
            tmp.value = item.name.toLowerCase()
            return tmp
          })
          dispatch({ type: 'SET_LIST_CATEGORIES', payload })
        })
      }
    }
    dispatch(addCategories())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
