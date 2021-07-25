import React, { Fragment, HTMLAttributes } from 'react'
import css from 'styled-jsx/css'
import colors from '../../configs/colors.json'

export type FooterMenuItemProps = HTMLAttributes<HTMLDivElement> & {
  href: string
}

const styles = css`
  .footer_menu_item {
    width: 20vw;
    color: ${colors.white};
    padding: 5px;
    cursor: pointer;
    text-align: center;
    background: ${colors.main};
  }
  .footer_menu_item:hover {
    transition: all 0.2s ease 0s;
    background: ${colors.sub};
  }
  @media screen and (max-width: 640px) {
    .footer_menu_item {
      width: 25vw;
      color: ${colors.white};
      padding: 5px;
      cursor: pointer;
      text-align: center;
      background: ${colors.main};
    }
  }
`

const FooterMenuItem: React.FC<FooterMenuItemProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Fragment>
      <a className="footer_menu_item" href={href}>
        <div {...props}>{children}</div>
      </a>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default FooterMenuItem
