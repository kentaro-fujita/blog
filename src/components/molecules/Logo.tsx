import React, { HTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from '../atoms/Image'

const styles = css`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`

export type LogoProps = HTMLAttributes<HTMLElement>

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Fragment>
      <Image {...props} imgUrl="./assets/logo.png" />
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Logo
