import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from 'next/image'

const styles = css`
  .header_image {
    width: 400px;
    height: auto;
    margin: 0 auto;
  }
  @media screen and (max-width: 640px) {
    .header_image {
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  }
`

const HeaderImage: React.FC = () => {
  return (
    <Fragment>
      <div className="header_image">
        <Image src={'/assets/header.png'} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default HeaderImage
