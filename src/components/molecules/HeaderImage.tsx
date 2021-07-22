import React, { HTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from '../atoms/Image'

const styles = css`
  .header_image {
    display: inline-block;
    margin: 0 auto;
    cursor: pointer;
    height: auto;
    width: 40%;
    text-decoration: none;
  }
`

export type HeaderImageProps = HTMLAttributes<HTMLElement>

const HeaderImage: React.FC<HeaderImageProps> = (props) => {
  return (
    <Fragment>
      <div className="header_image">
        <Image {...props} imgUrl="/assets/header.png" />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default HeaderImage
