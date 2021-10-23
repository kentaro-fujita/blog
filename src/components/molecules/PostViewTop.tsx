import React, { Fragment } from 'react'
import formatDate from '../../libs/date'
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
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{`Published date: ${formatDate(new Date(createdAt))}`}</p>
        <p className="gray">
          {updatedAt &&
            `Last modified date: ${formatDate(new Date(updatedAt))}`}
        </p>
      </div>
      <div className="post-view_tags">
        <TagsList tags={tags} />
      </div>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default PostViewTop
