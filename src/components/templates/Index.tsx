import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import config from '../../configs/config.json'
import IndexView, { IndexViewProps } from '../organisms/IndexView'

export type IndexProps = IndexViewProps

const Index: React.FC<IndexProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{config.siteName}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
        <meta name="description" content={config.siteName} />
        <meta property="og:title" content={`Top page - ${config.siteName}`} />
        <meta property="og:site_name" content={config.siteName} />
        <meta
          property="og:description"
          content={`top page of ${config.siteName}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/digest_image.png`}
        />
      </Head>
      <Header />
      <IndexView {...props} />
      <Footer />
    </Fragment>
  )
}
export default Index
