import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Table } from 'antd';
import './table.styl';

const data = [
  {name: 'lalala', block: 12232, price: 0.5, address: '0x123lqowemqwo4e012i'},
  {name: 'lalala', block: 12332, price: 0.7, address: '0x123lqowemqwo4e012i'},
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
        pageSize: 20
      },
      //loading: false
    }
  }
  
  handleChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render () {
    return (
      <Row id="graphTable" type="flex" justify="space-around" align="middle">
        <Col span={18}>
          <Form layout="inline" className="formSearch">
            <Form.Item label="Filter Data">
              <Input prefix={<Icon type="search" />} placeholder="Search" />
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
            onChange={(pagination, filters, sorter) => this.handleChange(pagination, filters, sorter)}
          />
        </Col>
          
      </Row>
    )
  }
}
export default GraphTable
