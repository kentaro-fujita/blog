import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import {
  getAllPosts,
  getAllPostSlugs,
  getAllPostTags,
  getPostBySlug,
} from '../../api'
import PostTemplate, {
  PostTemplateProps,
} from '../../components/templates/Post'
import config from '../../configs/config.json'

const PostPage: React.FC<PostTemplateProps> = (props: PostTemplateProps) => {
  return <PostTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllPostSlugs()

  return {
    fallback: false,
    paths: slugs.map((slug) => ({ params: { slug } })),
  }
}

export const getStaticProps: GetStaticProps<
  PostTemplateProps,
  { slug: string }
> = async ({ params }) => {
  if (!params) throw new Error('Component file name must be params.')
  const post = await getPostBySlug(params.slug)
  const allPosts = await getAllPosts()
  const latestPosts = allPosts.slice(0, config.postsPerPages)
  const allTags = await getAllPostTags()

  return {
    props: { post, latestPosts, allTags },
  }
}
export default PostPage
