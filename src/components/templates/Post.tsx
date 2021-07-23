import React, { Fragment } from 'react'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'
import PostView, { PostViewProps } from '../organisms/PostView'
import config from '../../configs/config.json'

export type PostTemplateProps = PostViewProps

const PostTemplate: React.FC<PostTemplateProps> = (props) => {
  return (
    <Fragment>
      <Header>
        <title>{`${props.post.title}`}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Header>
      <PostView {...props} />
      <Footer>{config.copyRight}</Footer>
    </Fragment>
  )
}
export default PostTemplate
