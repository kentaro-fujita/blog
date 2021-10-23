import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Button from '../atoms/Button'
import PaginationButton from '../molecules/PaginationButton'

const styles = css`
  .pagination {
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }
  .pagination_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`
export type PaginationProps = {
  countPages: number
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ countPages, currentPage }) => {
  const router = useRouter()
  const isPrevExist = currentPage !== 1
  const isNextExist =
    currentPage !== countPages && currentPage + 1 <= countPages
  return (
    <Fragment>
      <div className="pagination">
        {isPrevExist && (
          <Button onClick={() => router.push(`/pages/${currentPage - 1}`)}>
            Prev
          </Button>
        )}
        <div className="pagination_btn">
          {isPrevExist && 1 < currentPage - 2 && (
            <Fragment>
              <div>
                <PaginationButton className="sub" href="/pages/1" num={1} />
              </div>
              <span>...</span>
            </Fragment>
          )}
          {[...Array(countPages).keys()].map((n, i) => {
            if (currentPage === n + 1) {
              return (
                <div key={i}>
                  <PaginationButton className="main" num={n + 1} />
                </div>
              )
            } else if (currentPage - 2 <= n + 1 && n + 1 <= currentPage + 2) {
              return (
                <div key={i}>
                  <PaginationButton
                    className="sub"
                    href={`/pages/${n + 1}`}
                    num={n + 1}
                  />
                </div>
              )
            }
          })}
          {isNextExist && currentPage + 2 < countPages && (
            <Fragment>
              <span>...</span>
              <div>
                <PaginationButton
                  className="sub"
                  href={`/pages/${countPages}`}
                  num={countPages}
                />
              </div>
            </Fragment>
          )}
        </div>
        {isNextExist && (
          <Button onClick={() => router.push(`/pages/${currentPage + 1}`)}>
            Next
          </Button>
        )}
      </div>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default Pagination
