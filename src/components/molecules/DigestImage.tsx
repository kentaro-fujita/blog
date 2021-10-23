import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Image from 'next/image'

const styles = css`
  /* no style */
`

export type DigestImageProps = {
  catchImageUrl?: string
}

const DigestImage: React.FC<DigestImageProps> = ({ catchImageUrl }) => {
  return (
    <Fragment>
      <Image src={catchImageUrl ?? '/assets/digest_image.png'} />
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default DigestImage
