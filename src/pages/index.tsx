import { GetStaticProps } from 'next'
import React from 'react'
import { getAllPosts } from '../api'
import Index from '../components/templates/Index'
import { Post } from '../models'

type Props = {
  posts: Post[]
}

const IndexPage: React.FC<Props> = (props: Props) => {
  return <Index {...props} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts()
  return {
    props: { posts },
  }
}

export default IndexPage
