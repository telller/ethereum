import { Tag, Tooltip } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

const categories = {
  1: 'Adult',
  2: 'Blockchain',
  3: 'Business',
  4: 'Common/Well Known',
  5: 'Entertainment',
  6: 'Financial',
  7: 'Fund Raising',
  8: 'Geography',
  9: 'Health',
  10: 'Money',
  11: 'Name',
  12: 'Politics',
  13: 'Shopping',
  14: 'Social',
  15: 'Sports and Games',
  16: 'Technology'
}

const Tags = ({tagIds, limit}) => {
  const TagsMore = ({tagIds}) => {
    return (
      <Tooltip title={tagIds.map(id => categories[id]).join(', ')}>
        <Tag>{tagIds.length}&nbsp; more...</Tag>
      </Tooltip>
    )
  }
  if (!tagIds || !Array.isArray(tagIds)) return null
  const tags = [...tagIds]
  const firstTags = tags.splice(0, limit).map(id => <Tag key={id}>{categories[id]}</Tag>)
  return <span>{firstTags}{tags.length > limit && <TagsMore tagIds={tags} />}</span>
}
Tags.propTypes = {
  limit: PropTypes.number.isRequired,
  tagIds: PropTypes.any
}

export default Tags
