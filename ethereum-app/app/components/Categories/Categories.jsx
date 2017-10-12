import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Tag, Popover } from 'antd'
import './Categories.styl'

class Categories extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    limit: PropTypes.number,
    categories: PropTypes.array.isRequired,
    filter: PropTypes.object.isRequired,
    send: PropTypes.func.isRequired
  }
  static defaultProps = {
    limit: 3
  }
  handleSelect = value => {
    const select = value.toLowerCase()
    if (this.props.filter.categories.includes(select)) {
      this.props.send('DEL_SELECT_CATEGORIES', select)
    } else {
      this.props.send('ADD_SELECT_CATEGORIES', select)
    }
  }
  render () {
    return (
      <div className='categories'>
        {
          this.props.data.length > 0 && this.props.data.map((item, index) => {
            if (index < this.props.limit) {
              return <Tag key={index} onClick={() => this.handleSelect(item)} color='rgba(237, 237, 237, 0.6)'>{item}</Tag>
            }
          })
        }
        {
          this.props.data.length > this.props.limit &&
          <Popover content={
            <div className='more-categories'>
              {
                this.props.data.map((item, index) => {
                  if (index >= this.props.limit) {
                    return <p key={index} onClick={() => this.handleSelect(item)}>{item}</p>
                  }
                })
              }
            </div>
          }>
            <Tag>more...</Tag>
          </Popover>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  send: (type, payload) => {
    dispatch({ type, payload })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
