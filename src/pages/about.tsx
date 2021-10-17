import { GetStaticProps } from 'next'
import React from 'react'
import About, { AboutProps } from '../components/templates/About'
import createApolloClient from '../libs/apollo'
import config from '../configs/config.json'
import {
  AllTags,
  AllTagsQuery,
  AllTagsQueryVariables,
  LatestPosts,
  LatestPostsQuery,
  LatestPostsQueryVariables,
  Post,
} from '../graphql/generated/graphql'

export type AboutPageProps = {
  latestPosts: Post[]
  tags: string[]
}

const AboutPage = ({ latestPosts, tags }: AboutPageProps): JSX.Element => {
  const props: AboutProps = {
    latestPosts: latestPosts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        createdAt: post.sys.publishedAt,
      }
    }),
    tags: tags,
  }

  return <About {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createApolloClient()

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

  const AllTagsQueryResult = await client.query<
    AllTagsQuery,
    AllTagsQueryVariables
  >({
    query: AllTags,
  })

  return {
    props: {
      latestPosts: LatestPostsQueryResult.data.postCollection.items,
      tags: [...AllTagsQueryResult.data.postCollection.items],
    },
  }
}

export default AboutPage
