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
        <meta name="description" content={config.siteName} />
        <meta property="og:title" content={`About page - ${config.siteName}`} />
        <meta property="og:site_name" content={config.siteName} />
        <meta
          property="og:description"
          content={`I'm Kentaro Fujita. I received masters degree from the Graduate School of Science and
            Technology, Nara Institute of Science and Technology (NAIST), Japan.
            My research interest includes blockchain security and machine
            learning. - ${config.siteName}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/digest_image.png`}
        />
      </Head>
      <Header />
      <AboutText {...props} />
      <Footer />
    </Fragment>
  )
}
export default About
