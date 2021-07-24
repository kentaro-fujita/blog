import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from '../atoms/Image'

const styles = css`
  .header_image {
    width: 400px;
    height: auto;
    margin: 0 auto;
  }
`

const HeaderImage: React.FC = () => {
  return (
    <Fragment>
      <div className="header_image">
        <Image imgUrl={'/assets/header.png'} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default HeaderImage
