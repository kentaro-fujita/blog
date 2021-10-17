import React from 'react'
import { GetStaticProps } from 'next'
import Index, { IndexProps } from '../components/templates/Index'
import config from '../configs/config.json'
import {
  AllTags,
  AllTagsQuery,
  LatestPosts,
  LatestPostsQuery,
  LatestPostsQueryVariables,
  Post,
  TopPage,
  TopPageQuery,
  TopPageQueryVariables,
} from '../graphql/generated/graphql'
import createApolloClient from '../libs/apollo'

export type TopPageProps = {
  posts: Post[]
  latestPosts: Post[]
  tags: Post[]
}

const IndexPage = ({ posts, latestPosts, tags }: TopPageProps): JSX.Element => {
  const props: IndexProps = {
    posts: posts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        description: post.description,
        tags: post.tags,
        createdAt: post.sys.firstPublishedAt,
      }
    }),
    latestPosts: latestPosts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        createdAt: post.sys.firstPublishedAt,
      }
    }),
    tags: [].concat(...tags.map(({ tags }) => tags)),
    countPages: 1,
    currentPage: 1,
  }

  return <Index {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createApolloClient()

  const TopPageQueryResult = await client.query<
    TopPageQuery,
    TopPageQueryVariables
  >({
    query: TopPage,
    variables: {
      limit: config.postsPerPage,
      skip: 0,
    },
  })

  const LatestPostsQueryResult = await client.query<
    LatestPostsQuery,
    LatestPostsQueryVariables
  >({
    query: LatestPosts,
    variables: {
      limit: config.latestPostPerPage,
      skip: 0,
    },
  })

  const AllTagsQueryResult = await client.query<AllTagsQuery>({
    query: AllTags,
  })

  return {
    props: {
      posts: TopPageQueryResult.data.postCollection.items,
      latestPosts: LatestPostsQueryResult.data.postCollection.items,
      tags: AllTagsQueryResult.data.postCollection.items,
    },
  }
}

export default IndexPage
