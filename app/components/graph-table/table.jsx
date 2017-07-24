import React, { Component } from 'react'
import { Row, Col, Form, Icon, Input, Table, Radio, Modal } from 'antd'
import Buy from '../buy/buy.jsx'
import './table.styl'

const data = [
  {name: 'marlena', block: 4013908, price: 0.5, address: '0xf1d184c1a3032f7586261bea6ee5c2b18ac247fc'},
  {name: 'dlalala', block: 12332, price: 0.7, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 6000, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 1000, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 111, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 12, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 100, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12632, price: 0.1, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12732, price: 0.9, address: '0x123lqowemqwo4e012i'}
]

class GraphTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: data,
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
      swSearch: true,
      clickBuy: false,
      selectBuy: null
    }
  }

  changeSizePage (e) {
    this.setState({
      pagination: {pageSize: e.target.value}
    })
  }

  searchName (e) {
    this.setState({
      data: data.filter(item => item.name.search(e.target.value.toLowerCase()) !== -1),
      swSearch: data.filter(item => item.name.search(e.target.value.toLowerCase()) !== -1).length > 0
    })
  }

  clickBuy () {
    this.setState({
      clickBuy: !this.state.clickBuy
    })
  }

  render () {
    const columns = [
      {
        title: 'Buy',
        dataIndex: 'buy',
        width: '13%',
        onCellClick: record => {
          this.setState({
            selectBuy: record,
            clickBuy: !this.state.clickBuy
          })
        },
        render: () => {
          return (<div className='buy'>
            <Icon type='shopping-cart' />
          </div>
          )
        }
      },
      {
        title: '.eht Name',
        dataIndex: 'name',
        sorter: (a, b) => {
          if (a.name < b.name) {
            return -1
          } else if (a.name > b.name) {
            return 1
          } else return 0
        },
        width: '27%'
      },
      // {
      //   title: 'Block Created',
      //   dataIndex: 'block',
      //   sorter: (a, b) => a.block - b.block,
      //   width: '10%'
      // },
      {
        title: 'Price (ETH)',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
        render: text => {
          let classColor = 'defaultCell '
          if (text >= 5000) {classColor += 'bgPrice5000'}
          else if (text >= 1000) {classColor += 'bgPrice1000'}
          else if (text >= 100) {classColor += 'bgPrice100'}
          else if (text >= 10) {classColor += 'bgPrice10'}
          return <span className={classColor}>{text}</span>
        },
        width: '15%'
      },
      {
        title: 'Purchase Address',
        dataIndex: 'address',
        sorter: (a, b) => {
          if (a.address < b.address) {
            return -1
          } else if (a.address > b.address) {
            return 1
          } else return 0
        },
        width: '50%'
      }
    ]
    return (
      <Row id='graphTable'>
        <Col className='body'>
          <Modal
            className='buy-modal'
            width={400}
            onCancel={() => this.clickBuy()}
            visible={this.state.clickBuy}
            title='Buy ENS:'
            footer={
              <div onClick={() => this.clickBuy()}><Icon type='shopping-cart' /> | Buy</div>
            }
          >
            <Buy data={this.state.selectBuy} />
          </Modal>
          <Form layout='inline' className='formSearch'>
            <Form.Item label='Filter Data'>
              <Input prefix={<Icon type='search' />} placeholder='Search' onChange={e => this.searchName(e)} />
            </Form.Item>
          </Form>
          <Table
            size='small'
            className='tableDomains'
            columns={columns}
            rowKey={record => record.registered}
            dataSource={this.state.data}
            pagination={this.state.pagination}
          />
          <div className={'table-footer ' + (this.state.swSearch ? null : 'not-found')}>
            <p className={this.state.swSearch ? 'table-footer-search' : null}>Not found!</p>
            <Radio.Group className={this.state.swSearch ? 'btn-page-size' : 'btn-page-size-none'} defaultValue={this.state.pagination.pageSize} onChange={e => this.changeSizePage(e)}>
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
export default GraphTable
