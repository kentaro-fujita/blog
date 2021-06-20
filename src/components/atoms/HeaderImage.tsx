import React, { HTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'
import Styles from '../../configs/style.json'

const styles = css`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`

export type HeaderImageProps = HTMLAttributes<HTMLElement>

const HeaderImage: React.FC<HeaderImageProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <img {...props} src="/public/assets/header.png" alt="logo" />
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default HeaderImage
