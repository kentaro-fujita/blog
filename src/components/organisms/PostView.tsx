import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Post } from '../../models'
import PostViewContent from '../molecules/PostViewContent'
import PostViewTop from '../molecules/PostViewTop'
import SideBar, { SideBarProps } from './SideBar'

const styles = css`
  .post_view {
    width: 80%;
    margin: 0 auto;
  }
  .post_view_main {
    width: 80%;
    float: left;
  }
`

export type PostViewProps = SideBarProps & {
  post: Post
}

const PostView: React.FC<PostViewProps> = ({ post, latestPosts, allTags }) => {
  return (
    <Fragment>
      <div className="post_view">
        <div className="post_view_main">
          <PostViewTop {...post} />
          <hr></hr>
          <PostViewContent content={post.content} />
        </div>
        <SideBar latestPosts={latestPosts} allTags={allTags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default PostView
