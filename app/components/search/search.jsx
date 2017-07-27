import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './search.styl'

class Search extends Component {
  searchName (e) {
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

Search.propTypes = {
  data: PropTypes.array,
  findDomain: PropTypes.string,
  onFind: PropTypes.func
}

const mapStateToProps = state => {
  return {
    data: state.data,
    findDomain: state.findDomain
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
