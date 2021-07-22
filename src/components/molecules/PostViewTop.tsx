import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Post } from '../../models'
import Text from '../atoms/Text'
import Title from '../atoms/Title'

const styles = css`
  /* no style */
`

export type PostViewTopProps = {
  title: string
  createdAt: string
  updatedAt?: string
  // tags?: string[]
}

const PostViewTop: React.FC<PostViewTopProps> = ({
  title,
  createdAt,
  updatedAt,
  // tags,
}) => {
  return (
    <Fragment>
      <div className="digest_date">
        <Text className="gray">{updatedAt ? updatedAt : createdAt}</Text>
      </div>
      <div className="digest_title">
        <Title type="medium">{title}</Title>
      </div>
      {/* TODO: tags */}
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default PostViewTop
