import React, { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'
import config from '../../configs/config.json'
import TagView, { TagViewProps } from '../organisms/TagView'

export type TagProps = TagViewProps & {
  tag: string
}

const Tag: React.FC<TagProps> = ({ tag, allTags, posts, latestPosts }) => {
  return (
    <Fragment>
      <Head>
        <title>{`${tag} - ${config.siteName}`}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Head>
      <Header />
      <TagView allTags={allTags} posts={posts} latestPosts={latestPosts} />
      <Footer />
    </Fragment>
  )
}
export default Tag
