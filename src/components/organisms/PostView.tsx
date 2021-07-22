import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Post } from '../../models'
import PostViewContent from '../molecules/PostViewContent'
import PostViewTop from '../molecules/PostViewTop'

const styles = css`
  .post_view {
    width: 80%;
    margin: 0 auto;
  }
`

export type PostViewProps = {
  post: Post
}

const PostView: React.FC<PostViewProps> = ({ post }) => {
  return (
    <Fragment>
      <div className="post_view">
        <PostViewTop {...post} />
        <PostViewContent content={post.content} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default PostView
