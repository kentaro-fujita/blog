import React from 'react'
import { GetServerSideProps } from 'next'
import Index, { IndexProps } from '../components/templates/Index'
import config from '../configs/config.json'
import {
  Post,
  TopPage,
  TopPageQuery,
  TopPageQueryVariables,
} from '../graphql/generated/graphql'
import createApolloClient from '../libs/apollo'

export type TopPageProps = {
  posts: Post[]
  latestPosts: Post[]
  allTags: Post[]
}

const IndexPage = ({
  posts,
  latestPosts,
  allTags,
}: TopPageProps): JSX.Element => {
  const props: IndexProps = {
    posts: posts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        description: post.description,
        tags: post.tags,
        createdAt: post.sys.firstPublishedAt,
        catchImageUrl: post.catchImage.url,
      }
    }),
    // latestPosts: latestPosts.map((post) => {
    //   return {
    //     title: post.title,
    //     slug: post.slug,
    //     createdAt: post.sys.firstPublishedAt,
    //   }
    // }),
    // tags: [].concat(...allTags.map(({ tags }) => tags)),
    // countPages: 1,
    // currentPage: 1,
  }

  return <Index {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = createApolloClient()

  const { data } = await client.query<TopPageQuery, TopPageQueryVariables>({
    query: TopPage,
    variables: {
      limit: config.postsPerPage,
      skip: 0,
    },
  })

  return {
    props: {
      posts: data.posts.items,
      latestPosts: data.latestPosts.items,
      allTags: data.allTags.items,
    },
  }
}

export default IndexPage
