import { Row, Col, Icon, Table, Radio, Modal } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Buy from '../buy/buy.jsx'
import WooCommerce from '../WooCommerce/WooCommerce.js'
import Page from '../Page/Page.jsx'
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
      selected: null
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

  componentDidMount () {
    this.props.onLoadDomains()
  }

  render () {
    const checkFind = this.props.data.filter(item => ~item.name.search(this.props.findDomain)).length > 0
    const columns = [
      {
        title: '.eht Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name < b.name ? -1 : a.name > b.name,
        width: '30%'
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
        width: '20%'
      },
      {
        title: 'Categories',
        dataIndex: 'categories',
        render: (categories, record, cellKey) =>
          <div key={cellKey} className='name-categories'>
            {
              categories.map((item, index) => <span key={index}>{item}</span>)
            }
          </div>,
        width: '5%'
      },
      {
        title: 'Buy',
        dataIndex: 'buy',
        width: '8%',
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
      <Page id='graphTable'>
        {this.state.isBuyModalVisible && (
          <Buy onOk={this.buy} onCancel={() => this.setState({isBuyModalVisible: false})} data={this.state.selected} />
        )}
        <Table
          size='small'
          className='tableDomains'
          columns={columns}
          rowKey='name'
          dataSource={this.props.data}
          pagination={this.state.pagination}
        />
        <div className={'table-footer ' + (checkFind ? '' : 'not-found')}>
          <p className={checkFind ? 'table-footer-search' : null}>Not found!</p>
          <Radio.Group className={checkFind ? 'btn-page-size' : 'btn-page-size-none'} defaultValue={this.state.pagination.pageSize} onChange={e => this.changeSizePage(e)}>
            <Radio.Button value={20}>20</Radio.Button>
            <Radio.Button value={50}>50</Radio.Button>
            <Radio.Button value={100}>100</Radio.Button>
          </Radio.Group>
        </div>
      </Page>
    )
  }
}

GraphTable.propTypes = {
  findDomain: PropTypes.string,
  data: PropTypes.array,
  onLoadDomains: PropTypes.func
}

const mapStateToProps = state => ({
  data: state.data.filter(item => ~item.name.search(state.findDomain)),
  contactInfo: state.contactInfo,
  findDomain: state.findDomain,
  dataSend: state.sendBuy
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
