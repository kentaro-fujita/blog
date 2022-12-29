import { NextSeo } from 'next-seo'
import React, { Fragment } from 'react'
import AboutTemplate from '../components/templates/About'

const AboutPage = (): JSX.Element => {
  return (
    <Fragment>
      <NextSeo title="About" />
      <AboutTemplate />
    </Fragment>
  )
}

export default AboutPage
