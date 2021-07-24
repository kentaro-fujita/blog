import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import colors from '../../configs/colors.json'

const BUTTON_SIZE = 30

const styles = css`
  .btn {
    display: block;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    margin: 2rem 0.3rem;
    border-radius: 100%;
    text-decoration: none;
    text-align: center;
    justify-content: center;
  }
  .main {
    font-weight: bold;
    line-height: ${BUTTON_SIZE}px;
    background: ${colors.main};
    color: ${colors.white};
  }
  .sub {
    color: ${colors.main};
    border: 2px solid ${colors.main};
    background: ${colors.white};
  }
  .sub:hover {
    color: ${colors.main};
    background: ${colors.light_purple};
  }
`

export type PaginationButtonProps = {
  className: string
  href?: string
  num: number
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  className,
  href,
  num,
}) => {
  return (
    <Fragment>
      {className.includes('main') && <span className="btn main">{num}</span>}
      {className.includes('sub') && (
        <a className="btn sub" href={href ?? '/'}>
          {num}
        </a>
      )}
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default PaginationButton
