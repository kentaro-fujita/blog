import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

const styles = css`
  /* no style */
`

export type ImageProps = {
  imgUrl: string
}

const Image: React.FC<ImageProps> = ({ imgUrl }) => {
  return (
    <Fragment>
      <img src={imgUrl}></img>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Image
