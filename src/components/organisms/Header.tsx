import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import HeaderImage from '../molecules/HeaderImage'

const styles = css`
  .header_link {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
`

const Header: React.FC = () => {
  return (
    <Fragment>
      <a href={'/'} className="header_link">
        <HeaderImage />
      </a>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Header
