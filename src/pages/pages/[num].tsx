import React from 'react'
import { GetServerSideProps } from 'next'
import Index, { IndexProps } from '../../components/templates/Index'
import config from '../../configs/config.json'
import {
  AllSlugs,
  AllSlugsQuery,
  Post,
  TopPage,
  TopPageQuery,
  TopPageQueryVariables,
} from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'

export type PageProps = {
  posts: Post[]
}

const Page = ({ posts }: PageProps): JSX.Element => {
  const props: IndexProps = {
    posts: posts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        description: post.description,
        tags: post.tags,
        createdAt: post.createdAt,
        catchImageUrl: post.catchImage
          ? post.catchImage.url
          : '/assets/digest_image.png',
      }
    }),
  }
  return <Index {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = createApolloClient()
  const num = Array.isArray(query.num) ? query.num[0] : query.num

  const { data } = await client.query<TopPageQuery, TopPageQueryVariables>({
    query: TopPage,
    variables: {
      skip: (parseInt(num) - 1) * config.postsPerPage,
      limit: config.postsPerPage,
    },
  })

  const { data: slugsData } = await client.query<AllSlugsQuery>({
    query: AllSlugs,
  })

  const countPages = (slugsData.slugs.length - 1) / config.postsPerPage + 1

  return {
    props: {
      posts: data.posts,
      countPages: countPages,
      currentPage: parseInt(num),
    },
  }
}

export default Page
