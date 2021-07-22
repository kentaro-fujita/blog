import React from 'react'
import { getAllPosts } from '../api'
import Index from '../components/templates/Index'
import { Post } from '../models'

type Props = {
  posts: Post[]
}

const IndexPage = (props: Props) => {
  return <Index {...props} />
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: { posts },
  }
}

export default IndexPage
