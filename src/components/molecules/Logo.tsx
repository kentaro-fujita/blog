import React, { HTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from 'next/image'

const styles = css`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`

export type LogoProps = HTMLAttributes<HTMLElement>

const Logo: React.FC<LogoProps> = () => {
  return (
    <Fragment>
      <Image src={'/assets/logo.png'} />
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Logo
