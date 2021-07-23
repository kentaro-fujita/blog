import React, { Fragment, HTMLAttributes } from 'react'
import css from 'styled-jsx/css'
import colors from '../../configs/colors.json'

export type FooterMenuItemProps = HTMLAttributes<HTMLDivElement> & {
  href: string
}

const styles = css`
  div {
    width: 20vw;
    color: ${colors.white};
    padding: 5px;
    cursor: pointer;
    text-align: center;
    background: ${colors.main};
  }
  div:hover {
    transition: all 0.2s ease 0s;
    background: ${colors.sub};
  }
`

const FooterMenuItem: React.FC<FooterMenuItemProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Fragment>
      <a href={href}>
        <div {...props}>{children}</div>
      </a>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default FooterMenuItem
