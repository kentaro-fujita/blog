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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`

const FooterMenu: React.FC<FooterMenuProps> = ({ items }) => {
  return (
    <Fragment>
      <div className="flex">
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
