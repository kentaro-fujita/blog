import React, { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'
import config from '../../configs/config.json'
import TagView, { TagViewProps } from '../organisms/TagView'

export type TagsTemplateProps = TagViewProps

const TagsTemplate: React.FC<TagsTemplateProps> = ({
  selectedTags,
  tags,
  posts,
  latestPosts,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{`${selectedTags.join(',')} - ${config.siteName}`}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Head>
      <Header />
      <TagView
        selectedTags={selectedTags}
        posts={posts}
        latestPosts={latestPosts}
        tags={tags}
      />
      <Footer />
    </Fragment>
  )
}
export default TagsTemplate
