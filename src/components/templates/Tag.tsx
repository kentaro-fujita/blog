import React, { Fragment } from 'react'
import Head from 'next/head'
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
        <meta name="description" content={config.siteName} />
        <meta property="og:title" content={`Tags page - ${config.siteName}`} />
        <meta property="og:site_name" content={config.siteName} />
        <meta
          property="og:description"
          content={`Tags page of ${config.siteName}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/digest_image.png`}
        />
      </Head>
      <TagView
        selectedTags={selectedTags}
        posts={posts}
        latestPosts={latestPosts}
        tags={tags}
      />
    </Fragment>
  )
}
export default TagsTemplate
