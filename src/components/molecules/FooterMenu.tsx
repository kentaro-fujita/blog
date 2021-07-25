import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import FooterMenuItem from './FooterMenuItem'

export type FooterMenuProps = {
  items: {
    name: string
    link: string
  }[]
}

const styles = css`
  .footer_menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 640px) {
    .footer_menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin: 0 auto;
    }
  }
`

const FooterMenu: React.FC<FooterMenuProps> = ({ items }) => {
  return (
    <Fragment>
      <div className="footer_menu">
        {items.map((item, index) => (
          <FooterMenuItem href={item.link} key={index}>
            {item.name}
          </FooterMenuItem>
        ))}
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default FooterMenu
