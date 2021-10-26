import React, { Fragment } from 'react'
// import Pagination, { PaginationProps } from './Pagination'
import PostList, { PostListProps } from './PostList'

// export type IndexViewProps = DigestListProps & PaginationProps & SideBarProps
export type IndexViewProps = PostListProps

const IndexView: React.FC<IndexViewProps> = ({
  posts,
  // countPages,
  // currentPage,
}) => {
  return (
    <Fragment>
      <PostList posts={posts} />
      {/* <Pagination countPages={countPages} currentPage={currentPage} /> */}
    </Fragment>
  )
}
export default IndexView
