import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { getAllPosts, getAllPostTags } from '../../api'
import Tag, { TagProps } from '../../components/templates/Tag'

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
  const posts = await getAllPosts()
  const tags = await getAllPostTags()
  const taggedPosts = posts.filter((post) => post.tags.includes(params.tag))
  return {
    props: {
      tag: params.tag,
      tags: tags,
      posts: taggedPosts,
    },
  }
}

export default Tags
