import { GetStaticProps } from 'next'
import React from 'react'
import About, { AboutProps } from '../components/templates/About'
import createApolloClient from '../libs/apollo'
import config from '../configs/config.json'
import {
  AboutPage as GAboutPage,
  AboutPageQuery,
  AboutPageQueryVariables,
  Post,
} from '../graphql/generated/graphql'

export type AboutPageProps = {
  latestPosts: Post[]
  allTags: Post[]
}

const AboutPage = ({ latestPosts, allTags }: AboutPageProps): JSX.Element => {
  const props: AboutProps = {
    latestPosts: latestPosts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        createdAt: post.sys.firstPublishedAt,
      }
    }),
    tags: [].concat(...allTags.map(({ tags }) => tags)),
  }

  return <About {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createApolloClient()

  const { data } = await client.query<AboutPageQuery, AboutPageQueryVariables>({
    query: GAboutPage,
    variables: {
      limit: config.postsPerPage,
    },
  })

  return {
    props: {
      latestPosts: data.latestPosts.items,
      allTags: data.allTags.items,
    },
  }
}

export default AboutPage
