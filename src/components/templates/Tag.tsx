import React, { Fragment } from 'react'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'
import config from '../../configs/config.json'
import TagView, { TagViewProps } from '../organisms/TagView'

export type TagProps = TagViewProps & {
  tag: string
}

const Tag: React.FC<TagProps> = ({ tag, tags, posts }) => {
  return (
    <Fragment>
      <Header>
        <title>{`${tag} - ${config.siteName}`}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Header>
      <TagView tags={tags} posts={posts} />
      <Footer>{config.copyRight}</Footer>
    </Fragment>
  )
}
export default Tag
