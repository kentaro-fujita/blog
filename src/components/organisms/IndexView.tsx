import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import DigestList, { DigestListProps } from './DigestList'
import Pagination, { PaginationProps } from './Pagination'
import PostList, { PostListProps } from './PostList'
import SideBar, { SideBarProps } from './SideBar'

const styles = css`
  .index_view {
    width: 80%;
    margin: 0 auto;
  }
  .index_view_main {
    width: 80%;
    float: left;
  }
  @media screen and (max-width: 640px) {
    .index_view {
      width: 100%;
      margin: 0 auto;
    }
    .index_view_main {
      width: 100%;
      padding: 1rem;
    }
  }
`

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
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default IndexView
