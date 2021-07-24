import React, { Fragment, HTMLAttributes } from 'react'
import css from 'styled-jsx/css'

const styles = css`
  /* no style */
`

export type ImageProps = HTMLAttributes<HTMLImageElement> & {
  imgUrl: string
}

const Image: React.FC<ImageProps> = ({ imgUrl, ...props }) => {
  return (
    <Fragment>
      <img src={imgUrl} alt="" {...props} />
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Image
