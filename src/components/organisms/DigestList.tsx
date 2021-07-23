import Link from 'next/link'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Post } from '../../models'
import Digest from './Digest'

const styles = css`
  .digest_list {
    width: 80%;
    margin: 0 auto;
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
          <Link href={`/posts/${post.slug}`} key={index}>
            <Digest {...post} />
          </Link>
        ))}
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default DigestList
