import React, { HTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'

import HeaderImage from '../molecules/HeaderImage'

const styles = css`
  header {
    margin: 0;
    display: inline-block;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
`

export type HeaderProps = HTMLAttributes<HTMLElement>

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Fragment>
      <header {...props}>
        <a href={'/'}>
          <HeaderImage />
        </a>
      </header>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Header
