import React, { Component } from 'react'
import { Select, Icon } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './search.styl'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      select: props.filter.categories,
      domains: props.domains,
      categories: props.categories,
      find: ''
    }
  }
  static propTypes = {
    domains: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    filter: PropTypes.object.isRequired,
    send: PropTypes.func.isRequired
  }
  handleChange = select => {
    const categories = select.filter(
      item => this.props.categories.map(
        category => category.value
      ).includes(item)
    )
    const domain = select.find(
      item => this.props.domains.map(
        domain => domain.name
      ).includes(item)
    )
    this.setState(
      { select },
      () => {
        this.props.send('SET_SELECT_CATEGORIES', categories)
        this.props.send('SET_SELECT_DOMAINS', domain || '')
      }
    )
  }
  handleSearch = find => {
    if (!this.props.filter.domain) {
      const domains = this.filterDomainByCategories(this.props).filter(domain => ~domain.name.indexOf(find.toLowerCase()))
      const categories = this.props.categories.filter(category => ~category.value.indexOf(find.toLowerCase()))
      this.setState({ domains, categories })
    }
  }

  filterDomainByCategories = props => {
    return props.domains.filter(
      domain => props.filter.categories.every(
        item => domain.categories.map(elem => elem.toLowerCase()).includes(item)
      )
    )
  }

  componentWillReceiveProps = nextProps => {
    const domains = this.filterDomainByCategories(nextProps).filter(domain => ~domain.name.indexOf(nextProps.filter.domain))
    const select = nextProps.filter.categories.slice()
    nextProps.filter.domain && select.push(nextProps.filter.domain)
    this.setState({ select, domains, categories: nextProps.filter.domain ? [] : nextProps.categories })
  }

  render () {
    const { select, domains, categories } = this.state
    return (
      <div id='search'>
        <Icon type='search' />
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
