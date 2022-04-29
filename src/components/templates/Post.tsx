import React, { Fragment } from 'react'
import Head from 'next/head'
import PostView, { PostViewProps } from '../organisms/PostView'
import config from '../../configs/config.json'

export type PostTemplateProps = PostViewProps

const PostTemplate: React.FC<PostTemplateProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{`${props.post.title} - ${config.siteName}`}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
        <meta name="description" content={config.siteName} />
        <meta
          property="og:title"
          content={`${props.post.title} - ${config.siteName}`}
        />
        <meta property="og:site_name" content={config.siteName} />
        <meta
          property="og:description"
          content={`${props.post.description}  - ${config.siteName}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={props.post.catchImageUrl} />
      </Head>
      <PostView {...props} />
    </Fragment>
  )
}
export default PostTemplate
