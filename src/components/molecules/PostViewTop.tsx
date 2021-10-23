import React, { Fragment } from 'react'
import formatDate from '../../libs/date'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import Icon from '../atoms/Icon'
import TagsList, { TagsListProps } from './TagsList'

export type PostViewTopProps = TagsListProps & {
  title: string
  description: string
  createdAt: string
  updatedAt?: string
  catchImageUrl?: string
}

const PostViewTop: React.FC<PostViewTopProps> = ({
  title,
  createdAt,
  updatedAt,
  tags,
}) => {
  return (
    <Fragment>
      <Title type="h1" className="text-center mb-4">
        {title}
      </Title>
      <div className="flex items-end flex-col text-gray-500 dark:text-gray-300">
        <div className="flex items-center mx-6">
          <Icon className="fas fa-clock" />
          <Text className="ml-2">
            {`Published: ${formatDate(new Date(createdAt))}`}
          </Text>
        </div>
        <div className="flex items-center mx-6">
          <Icon className="fas fa-clock" />
          <Text className="ml-2">
            {updatedAt && `Last modified: ${formatDate(new Date(updatedAt))}`}
          </Text>
        </div>
      </div>
      <TagsList tags={tags} />
    </Fragment>
  )
}
export default PostViewTop
