import { GetStaticProps } from 'next'
import React from 'react'
import { getAllPosts, getAllPostTags } from '../libs/api'
import Index, { IndexProps } from '../components/templates/Index'
import config from '../configs/config.json'

const IndexPage: React.FC<IndexProps> = (props) => {
  return <Index {...props} />
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const allPosts = await getAllPosts()
  const countPages = (allPosts.length - 1) / config.postsPerPages + 1
  const posts = allPosts.slice(0, config.postsPerPages)
  const allTags = await getAllPostTags()

  return {
    props: {
      posts,
      latestPosts: posts,
      allTags,
      currentPage: 1,
      countPages: countPages,
    },
  }
}

export default IndexPage
