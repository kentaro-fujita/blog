import { GetStaticProps } from 'next'
import React from 'react'
import { getAllPosts } from '../api'
import Index, { IndexProps } from '../components/templates/Index'
import config from '../configs/config.json'

const IndexPage: React.FC<IndexProps> = (props) => {
  return <Index {...props} />
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const posts = await getAllPosts()
  const countPages = (posts.length - 1) / config.postsPerPages + 1
  return {
    props: { posts, currentPage: 1, countPages: countPages },
  }
}

export default IndexPage
