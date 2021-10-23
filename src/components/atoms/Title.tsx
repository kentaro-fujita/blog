import React, { Fragment, HTMLAttributes } from 'react'
import css from 'styled-jsx/css'
import colors from '../../configs/colors.json'

const styles = css`
  .title {
    color: ${colors.black};
  }
`
export type TitleProps = HTMLAttributes<HTMLElement> & {
  type: 'large' | 'medium' | 'small'
}

const Title: React.FC<TitleProps> = ({ type, children }) => {
  return (
    <Fragment>
      {type === 'large' && <h1>{children}</h1>}
      {type === 'medium' && <h2>{children}</h2>}
      {type === 'small' && <h3>{children}</h3>}
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default Title
