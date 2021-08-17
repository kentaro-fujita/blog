import React, { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'
import PostView, { PostViewProps } from '../organisms/PostView'
import config from '../../configs/config.json'

export type PostTemplateProps = PostViewProps

const PostTemplate: React.FC<PostTemplateProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{`${props.post.title} - ${config.siteName}`}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Head>
      <Header />
      <PostView {...props} />
      <Footer />
    </Fragment>
  )
}
export default PostTemplate
