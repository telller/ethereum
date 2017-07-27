import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import './search.styl'

class Search extends Component {
  searchName (e) {
    console.log(e.target.value)
  }

  // searchName (e) {
  //   this.setState({
  //     data: data.filter(item => item.name.search(e.target.value.toLowerCase()) !== -1),
  //     swSearch: data.filter(item => item.name.search(e.target.value.toLowerCase()) !== -1).length > 0
  //   })
  // }

  render () {
    return (
      <div id='search'>
        <Input prefix={<Icon type='search' />} placeholder='Search' onChange={e => this.searchName(e)} />
      </div>
    )
  }
}

export default Search
