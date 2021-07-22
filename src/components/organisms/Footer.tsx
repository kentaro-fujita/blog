import React, { HTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'

import colors from '../../configs/colors.json'
import FooterMenu, { FooterMenuProps } from '../molecules/FooterMenu'

const styles = css`
  .footer_menu {
    color: ${colors.white};
    text-align: center;
    background-color: ${colors.main};
    margin: 0 auto;
  }
  .footer_copyright {
    color: ${colors.white};
    text-align: center;
    padding: 5px 0 5px;
    background-color: ${colors.main};
  }
`

const Footer: React.FC = ({ children }) => {
  const items = [
    { name: 'About', link: '/about' },
    { name: 'GitHub', link: 'https://github.com/kentaro-fujita/' },
    { name: 'Links', link: '/' },
    { name: 'Contact', link: '/' },
  ]
  return (
    <Fragment>
      <div className="footer_menu">
        <FooterMenu items={items} />
      </div>
      <div className="footer_copyright">
        <footer>{children}</footer>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Footer
