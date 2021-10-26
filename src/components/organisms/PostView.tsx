import React, { Fragment } from 'react'
import PostViewContent, {
  PostViewContentProps,
} from '../molecules/PostViewContent'
import PostViewTop, { PostViewTopProps } from '../molecules/PostViewTop'

export type PostViewProps = {
  post: PostViewTopProps & PostViewContentProps
}
// & SideBarProps

const PostView: React.FC<PostViewProps> = ({ post }) => {
  return (
    <Fragment>
      <PostViewTop {...post} />
      <hr></hr>
      <PostViewContent content={post.content} />
    </Fragment>
  )
}
export default PostView
