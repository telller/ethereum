import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Table, Radio } from 'antd';
import './table.styl';

const data = [
  {name: 'qlalala', block: 12232, price: 0.5, address: '0x123lqowemqwo4e012i'},
  {name: 'dlalala', block: 12332, price: 0.7, address: '0x123lqowemqwo4e012i'},
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
];

const columns = [
  {
    title: '.eht Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    width: '20%'
  }, 
  {
    title: 'Block Created',
    dataIndex: 'block',
    sorter: (a, b) => a.block - b.block,
    width: '20%'
  }, 
  {
    title: 'Price (ETH)',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
    width: '20%'
  },
  {
    title: 'Purchase Address',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
    width: '40%'
  }
];

class GraphTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      pagination: {
        pageSize: 20,
        showQuickJumper: true,
        locale: {
          items_per_page: "/ page",
          jump_to: "#",
          next_3: "Next 3 Pages",
          next_5: "Next 5 Pages",
          next_page: "Next Page",
          page:"",
          prev_3: "Previous 3 Pages",
          prev_5: "Previous 5 Pages",
          prev_page: "Previous Page"          
        }
      },
      swSearch: true
    }
  }

  changeSizePage(e){
    this.setState({
      pagination: {pageSize: e.target.value}
    });
  }

  searchName(e){
    this.setState({
      data: data.filter(item => item.name.indexOf(e.target.value) != -1 ? true : false ),
      swSearch: data.filter(item => item.name.indexOf(e.target.value) != -1 ? true : false ).length > 0 ? true : false
    });
    console.log(this.state.swSearch);
  }

  render () {
    return (
      <Row id="graphTable">
        <Col span={22}>
          <Form layout="inline" className="formSearch">
            <Form.Item label="Filter Data">
              <Input prefix={<Icon type="search" />} placeholder="Search" onChange={(e) => this.searchName(e)} />
            </Form.Item>
          </Form>
          <Table
            size="small"
            className="tableDomains"
            columns={columns}
            rowKey={record => record.registered}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            //loading={this.state.loading}
          />
          <div className="table-footer">
            <p className={this.state.swSearch ? "table-footer-search" : null}>Not found!</p>
              <Radio.Group className={ this.state.swSearch ? "btn-page-size" : "btn-page-size-none" } defaultValue={this.state.pagination.pageSize} onChange={ (e) => this.changeSizePage(e) }>
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
