import React, { Component } from 'react'
import { Select, Icon } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './search.styl'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      select: props.filter.categories
    }
  }
  static propTypes = {
    domains: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    send: PropTypes.func.isRequired,
    filter: PropTypes.object.isRequired
  }
  handleChange = select => {
    this.setState({ select }, this.props.send('SET_SELECT_CATEGORIES', select))
  }
  handleSearch = value => {
    console.log('search:', value)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      select: nextProps.filter.categories
    })
  }

  render () {
    const { domains, categories } = this.props
    const { select } = this.state
    return (
      <div id='search'>
        {/* <Input prefix={<Icon type='search' />} placeholder='Search'
          onChange={e => this.props.onFind(e.target.value)} /> */}
        <Select
          mode='multiple'
          value={select}
          placeholder='Search'
          filterOption={false}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
        >
          <Select.OptGroup label='Categories'>
            {categories.map(item => <Select.Option key={item.value} value={item.value}>{item.text}</Select.Option>)}
          </Select.OptGroup>
          <Select.OptGroup label='Domains'>
            {domains.map(item => <Select.Option key={item.id} value={item.name}>{item.name}</Select.Option>)}
          </Select.OptGroup>
        </Select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  domains: state.data,
  categories: state.categories,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  send: (type, payload) => {
    dispatch({ type, payload })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
