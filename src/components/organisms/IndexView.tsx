import React, { Fragment } from 'react'
import Pagination, { PaginationProps } from './Pagination'
import PostList, { PostListProps } from './PostList'
import SideBar, { SideBarProps } from './SideBar'

// export type IndexViewProps = DigestListProps & PaginationProps & SideBarProps
export type IndexViewProps = PostListProps

const IndexView: React.FC<IndexViewProps> = ({
  posts,
  // latestPosts,
  // tags,
  // countPages,
  // currentPage,
}) => {
  return (
    <Fragment>
      <PostList posts={posts} />
      {/* <div className="index_view">
        <div className="index_view_main">
          <DigestList posts={posts} />
          <Pagination countPages={countPages} currentPage={currentPage} />
        </div>
        <SideBar latestPosts={latestPosts} tags={tags} />
      </div> */}
    </Fragment>
  )
}
export default IndexView
