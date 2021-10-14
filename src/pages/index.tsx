import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import React from 'react'
import Index, { IndexProps } from '../components/templates/Index'
import config from '../configs/config.json'
import {
  TopPage,
  TopPageQuery,
  TopPageQueryVariables,
} from '../graphql/generated/graphql'
import createApolloClient from '../libs/apollo'

const IndexPage = ({ postCollection }: TopPageQuery): JSX.Element => {
  const props: IndexProps = {
    posts: postCollection.items.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        description: post.description,
        tags: post.tags,
        createdAt: post.sys.createdAt,
        updatedAt: post.sys.updatedAt,
      }
    }),
    latestPosts: [],
    allTags: [],
    countPages: 1,
    currentPage: 1,
  }

  return <Index {...props} />
}

export const getStaticProps = async () => {
  const client: ApolloClient<NormalizedCacheObject> = createApolloClient()

  const { data } = await client.query<TopPageQuery, TopPageQueryVariables>({
    query: TopPage,
    variables: {
      limit: config.postsPerPages,
      skip: 0,
    },
  })

  return {
    props: {
      ...data,
    },
  }
}

export default IndexPage
