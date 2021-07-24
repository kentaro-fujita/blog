import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import colors from '../../configs/colors.json'
import FooterMenu from '../molecules/FooterMenu'

const styles = css`
  .footer_menu_wrapper {
    display: inline-block;
    width: 100%;
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
      <div className="footer_menu_wrapper">
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
