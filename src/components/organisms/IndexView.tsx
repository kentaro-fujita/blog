import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import DigestList, { DigestListProps } from './DigestList'
import Pagination, { PaginationProps } from './Pagination'
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

export type IndexViewProps = DigestListProps & PaginationProps & SideBarProps

const IndexView: React.FC<IndexViewProps> = ({
  posts,
  latestPosts,
  allTags,
  countPages,
  currentPage,
}) => {
  return (
    <Fragment>
      <div className="index_view">
        <div className="index_view_main">
          <DigestList posts={posts} />
          <Pagination countPages={countPages} currentPage={currentPage} />
        </div>
        <SideBar latestPosts={latestPosts} allTags={allTags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default IndexView
