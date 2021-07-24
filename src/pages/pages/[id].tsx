import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { getAllPosts, getAllPostSlugs } from '../../api'
import Index, { IndexProps } from '../../components/templates/Index'
import config from '../../configs/config.json'

const Page: React.FC<IndexProps> = (props) => {
  return <Index {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllPostSlugs()
  const postsLength = slugs.length
  const countPages = (postsLength - 1) / config.postsPerPages + 1
  const pagePaths = []
  for (let i = 1; i <= countPages; i++) {
    pagePaths.push(`${i}`)
  }

  return {
    fallback: false,
    paths: pagePaths.map((id) => ({ params: { id } })),
  }
}

export const getStaticProps: GetStaticProps<
  IndexProps,
  { id: string }
> = async ({ params }) => {
  if (!params) throw new Error('Component file name must be params.')
  const startIndex = (Number(params.id) - 1) * config.postsPerPages
  const endIndex = Number(params.id) * config.postsPerPages
  const allPosts = await getAllPosts()
  const countPages = (allPosts.length - 1) / config.postsPerPages + 1
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    props: { posts, currentPage: Number(params.id), countPages: countPages },
  }
}

export default Page
