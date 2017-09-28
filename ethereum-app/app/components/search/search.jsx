import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './search.styl'

class Search extends Component {
  static propTypes = {
    onFind: PropTypes.func
  }
  searchName = e => {
    this.props.onFind(e.target.value)
  }
  render () {
    return (
      <div id='search'>
        <Input prefix={<Icon type='search' />} placeholder='Search' onChange={e => this.searchName(e)} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
  onFind: name => {
    const payload = name.toLowerCase()
    dispatch({
      type: 'ON_FIND',
      payload
    })
  }
})

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default component
