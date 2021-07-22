import React, { Fragment } from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import DigestList, { DigestListProps } from '../organisms/DigestList'
import config from '../../configs/config.json'

export type IndexProps = DigestListProps

const Index: React.FC<IndexProps> = ({ posts }) => {
  return (
    <Fragment>
      <Header>
        <title>{config.siteName}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Header>
      <DigestList posts={posts} />
      <Footer>{config.copyRight}</Footer>
    </Fragment>
  )
}
export default Index
