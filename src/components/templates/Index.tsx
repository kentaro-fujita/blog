import React, { Fragment } from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import config from '../../configs/config.json'
import IndexView, { IndexViewProps } from '../organisms/IndexView'

export type IndexProps = IndexViewProps

const Index: React.FC<IndexProps> = (props) => {
  return (
    <Fragment>
      <Header>
        <title>{config.siteName}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Header>
      <IndexView {...props} />
      <Footer>{config.copyRight}</Footer>
    </Fragment>
  )
}
export default Index
