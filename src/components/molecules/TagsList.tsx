import React, { Fragment } from 'react'
import Icon from '../atoms/Icon'
import Tag from '../atoms/Tag'

export type TagsListProps = {
  tags?: string[]
}

const TagsList: React.FC<TagsListProps> = ({ tags }) => {
  return (
    <Fragment>
      <div className="flex flex-wrap items-center mx-4 pb-2 text-gray-500 dark:text-gray-300">
        <Icon className="fas fa-tags" />
        {tags && tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
      </div>
    </Fragment>
  )
}
export default TagsList
