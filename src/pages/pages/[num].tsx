import React from 'react'
import { GetServerSideProps } from 'next'
import Index, { IndexProps } from '../../components/templates/Index'
import config from '../../configs/config.json'
import {
  Post,
  TopPage,
  TopPageQuery,
  TopPageQueryVariables,
} from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'

export type PageProps = {
  posts: Post[]
  latestPosts: Post[]
  allTags: Post[]
  currentPage: number
  countPages: number
}

const Page = ({
  posts,
  latestPosts,
  allTags,
  currentPage,
  countPages,
}: PageProps): JSX.Element => {
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
    // currentPage: currentPage,
    // countPages: countPages,
  }
  return <Index {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = createApolloClient()
  const num = Array.isArray(params.num) ? params.num[0] : params.num

  const { data } = await client.query<TopPageQuery, TopPageQueryVariables>({
    query: TopPage,
    variables: {
      skip: (parseInt(num) - 1) * config.postsPerPage,
      limit: config.postsPerPage,
    },
  })
  const countPages = (data.allSlugs.items.length - 1) / config.postsPerPage + 1

  return {
    props: {
      posts: data.posts.items,
      latestPosts: data.latestPosts.items,
      allTags: data.allTags.items,
      countPages: countPages,
      currentPage: parseInt(num),
    },
  }
}

export default Page
