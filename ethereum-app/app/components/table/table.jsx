import { Row, Col, Icon, Table, Radio, Modal, Spin } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router'
import Buy from '../buy/buy.jsx'
import SingleDomain from '../SingleDomain/SingleDomain.jsx'
import Categories from '../Categories/Categories.jsx'
import WooCommerce from '../WooCommerce/WooCommerce.js'
import Domain from '../Domain.jsx'
import './table.styl'

class GraphTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pagination: {
        pageSize: 20,
        showQuickJumper: true,
        locale: {
          jump_to: '#'
        }
      },
      isBuyModalVisible: false,
      isDomainInfoModalVisible: false,
      selected: null,
      limitCategories: 3
    }
    this.buy = this.buy.bind(this)
  }

  changeSizePage (e) {
    this.setState({
      pagination: {pageSize: e.target.value}
    })
  }

  buy (values) {
    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()

    const sendDataGoogle = 'https://docs.google.com/forms/d/e/1FAIpQLSekDHkNfYUfFS0gKSBNbXKu3Exj5UPkYEgTGj_yOa7EjaV4AQ/formResponse?ifq' +
    '&entry.6737599=' + values.name +
    '&entry.1387721178=' + values.email +
    '&entry.1522767390=' + values.comment +
    '&entry.1493658382=' + values.domain +
    '&entry.1168806703=' + values.price +
    '&submit=Submit'

    xhr.open('GET', sendDataGoogle, true)
    xhr.send()

    const sendDataEmail = 'type=buy' +
      '&sender_name=' + encodeURIComponent(values.name) +
      '&sender_email=' + encodeURIComponent(values.email) +
      '&comment=' + encodeURIComponent(values.comment) +
      '&domain_name=' + encodeURIComponent(values.domain) +
      '&domain_price=' + encodeURIComponent(values.price)

    xhr.open('POST', '/wp-content/themes/ethereum_theme/sendEmail.php', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(sendDataEmail)

    Modal.success({
      title: 'Success',
      content: 'Our team will follow-up within next 24 hours',
      okText: 'OK'
    })
    this.setState({ isBuyModalVisible: false })
  }

  componentWillMount () {
    this.props.onLoadDomains()

    if (this.props.domain !== 'home' && this.props.data) {
      let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
      let xhr = new XHR()

      const sendNameDomain = 'name=' + this.props.domain

      xhr.open('POST', '/wp-content/themes/ethereum_theme/getDomainID.php', true)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(sendNameDomain)

      xhr.onload = () => {
        xhr.responseText && WooCommerce.getAsync('products/' + xhr.responseText).then(item => {
          this.setState({
            selected: new Domain(JSON.parse(item.toJSON().body)),
            isDomainInfoModalVisible: true
          })
        })
      }
    }
  }

  onSelectDomain (domain) {
    this.setState({
      selected: domain,
      isDomainInfoModalVisible: true
    })
  }

  closeModalDomainInfo () {
    browserHistory.push('/')
    this.setState({isDomainInfoModalVisible: false})
  }

  componentDidMount () {
    const widthCategories = document.querySelector('.ant-table-thead > tr > th:nth-child(3)').clientWidth
    let limitCategories = 3
    if (widthCategories > 310) {
      limitCategories = 3
    } else if (widthCategories > 260) {
      limitCategories = 2
    } else if (widthCategories > 200) {
      limitCategories = 1
    } else limitCategories = 0
    this.setState({
      limitCategories: limitCategories
    })
  }

  render () {
    const checkFind = this.props.data.filter(item => ~item.name.search(this.props.findDomain)).length > 0
    const hasData = this.props.data.length === 0 && !this.props.findDomain
    const columns = [
      {
        title: '.eht Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name < b.name ? -1 : a.name > b.name,
        render: (name, domain) =>
          <div onClick={() => this.onSelectDomain(domain)}>
            <Link to={'/' + name} >{name}</Link>
          </div>,
        width: '35%'
      },
      {
        title: 'Price (ETH)',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
        render: (text, selected) => {
          if (!Number(selected.price)) {
            return <a onClick={() => { this.setState({ isBuyModalVisible: true, selected }) }}>Make offer</a>
          }
          let classColor = 'defaultCell '
          if (text >= 5000) {
            classColor += 'bgPrice5000'
          } else if (text >= 1000) {
            classColor += 'bgPrice1000'
          } else if (text >= 100) {
            classColor += 'bgPrice100'
          } else if (text >= 10) {
            classColor += 'bgPrice10'
          }
          return <span className={classColor}>{text}</span>
        },
        width: '15%'
      },
      {
        title: 'Categories',
        dataIndex: 'categories',
        render: (categories, record, cellKey) =>
          <Categories key={cellKey} data={categories} limit={this.state.limitCategories} />,
        width: '40%'
      },
      {
        title: 'Buy',
        dataIndex: 'buy',
        width: '10%',
        onCellClick: selected => {
          this.setState({
            isBuyModalVisible: true,
            selected
          })
        },
        render: () => (
          <div className='buy'>
            <Icon type='shopping-cart' />
          </div>
        )
      }
    ]
    return (
      <Row id='graphTable'>
        <Col className='table'>
          <Table
            size='small'
            className='tableDomains'
            columns={columns}
            rowKey='name'
            dataSource={this.props.data}
            pagination={this.state.pagination}
          />
          <div className={'table-spinner ' + (hasData ? '' : 'hidden-display')}>
            <Spin size='large' />
          </div>
          <div className={'table-footer ' + (hasData ? 'hidden-display' : (checkFind ? '' : 'not-found'))}>
            <p className={checkFind ? 'table-footer-search' : null}>Not found!</p>
            <Radio.Group className={checkFind ? 'btn-page-size' : 'btn-page-size-none'} defaultValue={this.state.pagination.pageSize} onChange={e => this.changeSizePage(e)}>
              <Radio.Button value={20}>20</Radio.Button>
              <Radio.Button value={50}>50</Radio.Button>
              <Radio.Button value={100}>100</Radio.Button>
            </Radio.Group>
          </div>
          {
            this.state.isBuyModalVisible && (
              <Buy onOk={this.buy} onCancel={() => this.setState({isBuyModalVisible: false})} data={this.state.selected} />
            )
          }
          {
            this.state.isDomainInfoModalVisible && (
              <SingleDomain
                onCancel={() => this.closeModalDomainInfo()}
                data={this.state.selected} />
            )
          }
        </Col>
      </Row>
    )
  }
}

GraphTable.propTypes = {
  findDomain: PropTypes.string,
  data: PropTypes.array,
  onLoadDomains: PropTypes.func,
  domain: PropTypes.string
}

const mapStateToProps = state => ({
  data: state.data.filter(item => ~item.name.search(state.findDomain)),
  findDomain: state.findDomain
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
  }
})

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphTable)

export default component
