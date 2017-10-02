import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tag, Popover } from 'antd'
import './Categories.styl'

class Categories extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    limit: PropTypes.number,
    select: PropTypes.func
  }
  static defaultProps = {
    limit: 3
  }
  render () {
    return (
      <div className='categories'>
        {
          this.props.data.length > 0 && this.props.data.map((item, index) => {
            if (index < this.props.limit) {
              return <Tag key={index} onClick={() => this.props.select(item)} color='rgba(170, 221, 221, 0.5)'>{item}</Tag>
            }
          })
        }
        {
          this.props.data.length > this.props.limit &&
          <Popover content={
            <div>
              {
                this.props.data.map((item, index) => {
                  if (index >= this.props.limit) {
                    return <p key={index}>{item}</p>
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

export default Categories
