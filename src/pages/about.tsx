import { GetStaticProps } from 'next'
import React from 'react'
import { getAllPosts, getAllPostTags } from '../libs/apollo'
import About, { AboutProps } from '../components/templates/About'
import config from '../configs/config.json'

const AboutPage: React.FC<AboutProps> = (props) => {
  return <About {...props} />
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
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

export default AboutPage
