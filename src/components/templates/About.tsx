import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import config from '../../configs/config.json'
import AboutText, { AboutTextProps } from '../organisms/AboutText'

export type AboutProps = AboutTextProps

const About: React.FC<AboutProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{`About - ${config.siteName}`}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Head>
      <Header />
      <AboutText {...props} />
      <Footer />
    </Fragment>
  )
}
export default About
