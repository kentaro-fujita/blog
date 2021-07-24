import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import DigestList, { DigestListProps } from './DigestList'
import Pagination, { PaginationProps } from './Pagination'

const styles = css`
  /* no style */
`

export type IndexViewProps = DigestListProps & PaginationProps

const IndexView: React.FC<IndexViewProps> = ({
  posts,
  countPages,
  currentPage,
}) => {
  return (
    <Fragment>
      <div className="index_view">
        <DigestList posts={posts} />
        <Pagination countPages={countPages} currentPage={currentPage} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default IndexView
