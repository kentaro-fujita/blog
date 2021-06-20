import React, { HTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'
import Styles from '../../configs/style.json'

const styles = css`
  color: #fff;
  text-align: center;
  padding: 15px 0 15px;
  background-color: ${Styles.color.main};
`

export type FooterProps = HTMLAttributes<HTMLElement>

const Footer: React.FC<FooterProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <footer {...props}>{children}</footer>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Footer
