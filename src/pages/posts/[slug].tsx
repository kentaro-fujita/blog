import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { getAllPostSlugs, getPostBySlug } from '../../api'
import PostTemplate from '../../components/templates/Post'
import { Post } from '../../models'

type Props = {
  post: Post
}

const PostPage = (props: Props) => {
  return <PostTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllPostSlugs()

  return {
    fallback: false,
    paths: slugs.map((slug) => ({ params: { slug } })),
  }
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  if (!params) throw new Error('Component file name must be params.')
  const post = await getPostBySlug(params.slug)
  return {
    props: { post },
  }
}
export default PostPage
