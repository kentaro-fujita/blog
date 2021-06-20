import React, { HTMLAttributes, Fragment } from 'react'

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

export type AboutProps = HTMLAttributes<HTMLElement>

const About: React.FC<AboutProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <Header>
        <title>{'Wisteken.com'}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Header>
      {children}
      <Footer children="©︎ Wisteken.com All Right Reserved." />
    </Fragment>
  )
}
export default About
