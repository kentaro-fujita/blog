import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Post } from '../../models'
import Digest from './Digest'

const styles = css`
  .digest_list {
  }
`

export type DigestListProps = {
  posts: Post[]
}

const DigestList: React.FC<DigestListProps> = ({ posts }) => {
  return (
    <Fragment>
      <div className="digest_list">
        {posts.map((post, index) => (
          <Digest key={index} href={`/posts/${post.slug}`} {...post} />
        ))}
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default DigestList
