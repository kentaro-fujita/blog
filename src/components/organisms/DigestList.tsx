import React, { Fragment } from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'
import Digest, { DigestProps } from './Digest'

const styles = css`
  .digest_list {
  }
`

export type DigestListProps = {
  posts: (DigestProps & {
    slug: string
  })[]
}

const DigestList: React.FC<DigestListProps> = ({ posts }) => {
  return (
    <Fragment>
      <div className="digest_list">
        {posts.map((post, index) => (
          <Link key={index} href={`/posts/${post.slug}`} passHref>
            <a href={`/posts/${post.slug}`}>
              <Digest {...post} />
            </a>
          </Link>
        ))}
      </div>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default DigestList
