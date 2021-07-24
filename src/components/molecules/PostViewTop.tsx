import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Text from '../atoms/Text'
import Title from '../atoms/Title'
import TagsList, { TagsListProps } from './TagsList'

const styles = css`
  /* no style */
`

export type PostViewTopProps = TagsListProps & {
  title: string
  createdAt: string
  updatedAt?: string
}

const PostViewTop: React.FC<PostViewTopProps> = ({
  title,
  createdAt,
  updatedAt,
  tags,
}) => {
  return (
    <Fragment>
      <div className="post-view_date">
        <Text className="gray">{updatedAt ? updatedAt : createdAt}</Text>
      </div>
      <div className="post-view_title">
        <Title type="medium">{title}</Title>
      </div>
      <div className="post-view_tags">
        <TagsList tags={tags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default PostViewTop
