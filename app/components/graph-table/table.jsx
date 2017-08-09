import React, { Component } from 'react'
import { Row, Col, Icon, Table, Radio, Modal } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Buy from '../buy/buy.jsx'
import './table.styl'

class GraphTable extends Component {
  constructor () {
    super()
    this.state = {
      pagination: {
        pageSize: 20,
        showQuickJumper: true,
        locale: {
          items_per_page: '/ page',
          jump_to: '#',
          next_3: 'Next 3 Pages',
          next_5: 'Next 5 Pages',
          next_page: 'Next Page',
          page: '',
          prev_3: 'Previous 3 Pages',
          prev_5: 'Previous 5 Pages',
          prev_page: 'Previous Page'
        }
      },
      isBuyModalVisible: false,
      selectBuy: null
    }
    this.isBuyModalVisible = this.isBuyModalVisible.bind(this)
  }

  changeSizePage (e) {
    this.setState({
      pagination: {pageSize: e.target.value}
    })
  }

  isBuyModalVisible () {
    let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest
    let xhr = new XHR()
    xhr.open('GET', 'https://docs.google.com/forms/d/e/1FAIpQLSekDHkNfYUfFS0gKSBNbXKu3Exj5UPkYEgTGj_yOa7EjaV4AQ/formResponse?ifq&entry.6737599=' + this.props.contactInfo.name + '&entry.1387721178=' + this.props.contactInfo.mail + '&entry.1522767390=' + this.props.contactInfo.comment + '&entry.1493658382=' + this.props.dataSend.domain + '&entry.1168806703=' + this.props.dataSend.price + '&submit=Submit', true)
    xhr.send()
    Modal.success({
      title: 'Success',
      content: 'Our team will follow-up within next 24 hours',
      okText: 'OK'
    })
    this.setState({ isBuyModalVisible: false })
  }

  render () {
    const checkFind = this.props.data.filter(item => item.name.search(this.props.findDomain) !== -1).length > 0
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
        render: (text, selectBuy) => {
          if (text === '0.0') {
            return <a onClick={() => { this.setState({ isBuyModalVisible: true, selectBuy }) }}>Make offer</a>
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
        title: 'Buy',
        dataIndex: 'buy',
        width: '8%',
        onCellClick: selectBuy => {
          this.setState({
            isBuyModalVisible: true,
            selectBuy
          })
        },
        render: () => (
          <div className='buy'>
            <Icon type='shopping-cart' />
          </div>
        )
      }
    ]
    // TODO: Replace clickBuy to isBuyModalVisible. setState({clickBuy})
    return (
      <Row id='graphTable'>
        <Col className='body'>
          {this.state.isBuyModalVisible &&
            <Modal
              className='buy-modal'
              width={400}
              visible
              onCancel={() => { this.setState({isBuyModalVisible: false}) }}
              title='Buy ENS:'
              footer={
                <div onClick={this.isBuyModalVisible}><Icon type='shopping-cart' /> | Buy</div>
              }
            >
              <Buy data={this.state.selectBuy} />
            </Modal>
          }
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
        </Col>
      </Row>
    )
  }
}

GraphTable.propTypes = {
  data: PropTypes.array,
  dataSend: PropTypes.object,
  findDomain: PropTypes.string,
  contactInfo: PropTypes.object
}

const mapStateToProps = state => ({
  data: state.data.filter(item => item.name.search(state.findDomain) !== -1),
  findDomain: state.findDomain,
  dataSend: state.sendBuy,
  contactInfo: state.contactInfo
})

const component = connect(mapStateToProps, ({}))(GraphTable)

export default component
