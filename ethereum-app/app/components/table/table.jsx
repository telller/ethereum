import { Row, Col, Icon, Table, Radio, Modal, Spin } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router'
import GoogleForm from 'google-form-send'
import Buy from '../buy/buy.jsx'
import SingleDomain from '../SingleDomain/SingleDomain.jsx'
import Categories from '../Categories/Categories.jsx'
import './table.styl'

class GraphTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data,
      pagination: {
        pageSize: 20,
        showQuickJumper: true,
        locale: {
          jump_to: '#'
        }
      },
      isBuyModalVisible: false,
      isDomainInfoModalVisible: !!props.domain,
      selected: props.domain || null,
      limitCategories: 3,
      switchSorted: {
        order: 'descend',
        columnKey: 'price'
      }
    }
  }

  static propTypes = {
    domain: PropTypes.object,
    data: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    filter: PropTypes.object.isRequired
  }

  changeSizePage = e => {
    this.setState({ pagination: {pageSize: e.target.value} })
  }

  buy = values => {
    let form = new GoogleForm('https://docs.google.com/forms/d/e/1FAIpQLSekDHkNfYUfFS0gKSBNbXKu3Exj5UPkYEgTGj_yOa7EjaV4AQ')
    const formData = {
      'entry.6737599': values.name,
      'entry.1387721178': values.email,
      'entry.1522767390': values.comment,
      'entry.1493658382': values.domain,
      'entry.1168806703': values.price
    }
    form.setAllFields(formData)
    form.send(true)

    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()

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

  onSelectDomain = selected => {
    this.setState({ selected, isDomainInfoModalVisible: true })
  }

  closeModalDomainInfo = () => {
    browserHistory.push('/')
    this.setState({isDomainInfoModalVisible: false})
  }

  handleChangeTable = (pagination, switchFilter, switchSorted) => {
    this.setState({ switchSorted, switchFilter })
  }

  componentWillReceiveProps = nextProps => {
    const data = nextProps.data.filter(
      domain => nextProps.filter.categories.every(
        item => domain.categories.map(elem => elem.toLowerCase()).includes(item)
      )
    ).filter(domain => ~domain.name.indexOf(nextProps.filter.domain))
    this.setState({ data })
  }

  componentDidMount = () => {
    const widthCategories = document.querySelector('.ant-table-thead > tr > th:nth-child(3)').clientWidth
    let limitCategories = 3
    if (widthCategories > 310) {
      limitCategories = 3
    } else if (widthCategories > 260) {
      limitCategories = 2
    } else if (widthCategories > 200) {
      limitCategories = 1
    } else limitCategories = 1
    this.setState({ limitCategories })
  }

  render () {
    const checkFind = !!this.state.data.length
    const hasData = this.props.data.length === 0 && !this.props.filter.domain
    const columns = [
      {
        title: '.eht Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name < b.name ? -1 : a.name > b.name,
        sortOrder: this.state.switchSorted.columnKey === 'name' && this.state.switchSorted.order,
        render: (name, domain) => (
          <div onClick={() => this.onSelectDomain(domain)}>
            <Link to={'/domains/' + name} >{name}</Link>
          </div>
        ),
        width: '35%'
      },
      {
        title: 'Price (ETH)',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
        sortOrder: this.state.switchSorted.columnKey === 'price' && this.state.switchSorted.order,
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
          <Categories key={cellKey} data={categories} limit={this.state.limitCategories} select={this.selectCategory} />,
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
            dataSource={this.state.data}
            pagination={this.state.pagination}
            onChange={this.handleChangeTable}
          />
          <div className={'table-spinner ' + (hasData ? '' : 'hidden-display')}>
            <Spin size='large' />
          </div>
          <div className={'table-footer ' + (hasData ? 'hidden-display' : (checkFind ? '' : 'not-found'))}>
            <p className={checkFind ? 'table-footer-search' : null}>Not found!</p>
            <Radio.Group className={checkFind ? 'btn-page-size' : 'btn-page-size-none'}
              defaultValue={this.state.pagination.pageSize}
              onChange={e => this.changeSizePage(e)}>
              <Radio.Button value={20}>20</Radio.Button>
              <Radio.Button value={50}>50</Radio.Button>
              <Radio.Button value={100}>100</Radio.Button>
            </Radio.Group>
          </div>
          {
            this.state.isBuyModalVisible && (
              <Buy
                onOk={this.buy}
                onCancel={() => this.setState({isBuyModalVisible: false})}
                data={this.state.selected}
              />
            )
          }
          {
            this.state.isDomainInfoModalVisible && (
              <SingleDomain
                onCancel={() => this.closeModalDomainInfo()}
                data={this.state.selected}
              />
            )
          }
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  categories: state.categories,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(GraphTable)
