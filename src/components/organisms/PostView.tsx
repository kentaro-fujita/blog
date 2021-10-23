import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import PostViewContent, {
  PostViewContentProps,
} from '../molecules/PostViewContent'
import PostViewTop, { PostViewTopProps } from '../molecules/PostViewTop'
import SideBar, { SideBarProps } from './SideBar'

const styles = css`
  .post_view {
    width: 80%;
    margin: 0 auto;
  }
  .post_view_main {
    width: 80%;
    padding: 1rem;
    float: left;
  }
  @media screen and (max-width: 640px) {
    .post_view {
      width: 100%;
      margin: 0 auto;
    }
    .post_view_main {
      width: 100%;
      padding: 1rem;
    }
  }
`

export type PostViewProps = SideBarProps & {
  post: PostViewTopProps & PostViewContentProps
}

const PostView: React.FC<PostViewProps> = ({ post, latestPosts, tags }) => {
  return (
    <Fragment>
      <div className="post_view">
        <div className="post_view_main">
          <PostViewTop {...post} />
          <hr></hr>
          <PostViewContent content={post.content} />
        </div>
        {/* <SideBar latestPosts={latestPosts} tags={tags} /> */}
      </div>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default PostView
