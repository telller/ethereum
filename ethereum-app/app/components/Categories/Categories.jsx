import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tag, Popover } from 'antd'
import './Categories.styl'

const propTypes = {
  data: PropTypes.array.isRequired,
  limit: PropTypes.number
}

const defaultProps = {
  limit: 3
}

class Categories extends Component {
  render () {
    return (
      <div className='categories'>
        {
          this.props.data.length > 0 && this.props.data.map((item, index) => {
            if (index < this.props.limit) {
              return <Tag key={index} color='rgba(170, 221, 221, 0.5)'>{item}</Tag>
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

Categories.propTypes = propTypes
Categories.defaultProps = defaultProps

export default Categories
