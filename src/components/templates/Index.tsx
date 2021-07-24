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
      </Head>
      <Header />
      <IndexView {...props} />
      <Footer>{config.copyRight}</Footer>
    </Fragment>
  )
}
export default Index
