import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { getAllPosts, getAllPostTags } from '../../libs/apollo'
import Tag, { TagProps } from '../../components/templates/Tag'
import config from '../../configs/config.json'

const Tags: React.FC<TagProps> = (props) => {
  return <Tag {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllPostTags()
  return {
    fallback: false,
    paths: tags.map((tag) => ({ params: { tag } })),
  }
}

export const getStaticProps: GetStaticProps<
  TagProps,
  { tag: string }
> = async ({ params }) => {
  const allPosts = await getAllPosts()
  const allTags = await getAllPostTags()
  const taggedPosts = allPosts.filter((post) => post.tags.includes(params.tag))
  const latestPosts = allPosts.slice(0, config.postsPerPages)

  return {
    props: {
      tag: params.tag,
      allTags,
      posts: taggedPosts,
      latestPosts,
    },
  }
}

export default Tags
