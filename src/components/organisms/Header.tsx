import React, { HTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'

import HeaderImage from '../atoms/HeaderImage'

const styles = css`
  margin: 0;
  position: relative;
  text-align: center;
  display: inline-block;
  width: 100%;
`

export type HeaderProps = HTMLAttributes<HTMLElement>

const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <header {...props}>
        <a href="/">
          <HeaderImage />
        </a>
      </header>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Header
