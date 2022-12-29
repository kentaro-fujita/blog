import { NextSeo } from 'next-seo'
import React, { Fragment } from 'react'
import AboutTemplate from '../components/templates/About'

const AboutPage = (): JSX.Element => {
  return (
    <Fragment>
      <NextSeo
        title="About"
        description="I'm Kentaro Fujita. I received masters degree from the Graduate School of Science and Technology, Nara Institute of Science and Technology (NAIST), Japan. My research interest includes blockchain security and machine learning."
      />
      <AboutTemplate />
    </Fragment>
  )
}

export default AboutPage
