import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from '../atoms/Image'

const styles = css`
  .digest_image {
  }
`

export type DigestImageProps = {
  catchImageUrl: string
  href: string
}

const DigestImage: React.FC<DigestImageProps> = ({ catchImageUrl, href }) => {
  return (
    <Fragment>
      <a className="digest_image" href={href}>
        <Image imgUrl={catchImageUrl}></Image>
      </a>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default DigestImage
