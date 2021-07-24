import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from '../atoms/Image'

const styles = css`
  .digest_link {
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
  .digest_image {
    margin: auto 0;
  }
`

export type DigestImageProps = {
  catchImageUrl: string
  href: string
}

const DigestImage: React.FC<DigestImageProps> = ({ catchImageUrl, href }) => {
  return (
    <Fragment>
      <a className="digest_link" href={href}>
        <div className="digest_image">
          <Image imgUrl={catchImageUrl} />
        </div>
      </a>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default DigestImage
