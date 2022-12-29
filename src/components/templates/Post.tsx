import React from 'react'
import PostView, { PostViewProps } from '../organisms/PostView'

export type PostTemplateProps = PostViewProps

const PostTemplate: React.FC<PostTemplateProps> = ({ ...args }) => {
  return <PostView {...args} />
}
export default PostTemplate
