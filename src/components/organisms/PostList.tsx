import React, { Fragment } from 'react'
import PostCard, { PostCardProps } from './PostCard'

export type PostListProps = {
  posts: PostCardProps[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Fragment>
      <div className="flex flex-wrap items-center">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </Fragment>
  )
}
export default PostList
