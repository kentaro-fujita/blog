import React, { Fragment, HTMLAttributes } from 'react'
import css from 'styled-jsx/css'
import colors from '../../configs/colors.json'

const styles = css`
  .gray {
    color: ${colors.gray};
  }
  .black {
    color: ${colors.black};
  }
`

export type TextProps = HTMLAttributes<HTMLElement>

const Text: React.FC<TextProps> = ({ className, children }) => {
  return (
    <Fragment>
      <p className={className}>{children}</p>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default Text
