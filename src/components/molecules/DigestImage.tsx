import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from '../atoms/Image'

const styles = css`
  .digest_image {
  }
`

export type DigestImageProps = {
  catchImageUrl: string
}

const DigestImage: React.FC<DigestImageProps> = ({ catchImageUrl }) => {
  return (
    <Fragment>
      <div className="digest_image">
        <Image imgUrl={catchImageUrl}></Image>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default DigestImage
