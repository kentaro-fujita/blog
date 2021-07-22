import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { Post } from '../../models'
import Digest, { DigestProps } from './Digest'

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
  const router = useRouter()
  return (
    <Fragment>
      <div className="digest_list">
        {posts.map((post) => (
          <a onClick={() => router.push(`/posts/${post.slug}`)}>
            <Digest {...post} />
          </a>
        ))}
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default DigestList
