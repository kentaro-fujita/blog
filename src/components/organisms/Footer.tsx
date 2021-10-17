import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../../configs/config.json'
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
  .footer_copy_right {
    color: ${colors.white};
    text-align: center;
    padding: 5px 0 5px;
    background-color: ${colors.main};
  }
  .footer_privacy_policy {
    color: ${colors.white};
    text-align: center;
    background-color: ${colors.main};
  }
  .footer_privacy_policy a:hover {
    text-decoration: underline;
  }
`

const Footer: React.FC = () => {
  const items = [
    { name: 'About', link: '/about' },
    { name: 'GitHub', link: 'https://github.com/wisteken/' },
    { name: 'Links', link: '/' },
    { name: 'Contact', link: '/' },
  ]
  return (
    <Fragment>
      <div className="footer_menu_wrapper">
        <FooterMenu items={items} />
      </div>
      <div className="footer_copy_right">
        <span>{config.copyRight}</span>
      </div>
      <div className="footer_privacy_policy">
        <span>This site uses </span>
        <a href="https://policies.google.com/privacy">
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            size="sm"
            color={`${colors.white}`}
          />
          Google Analytics
        </a>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Footer
