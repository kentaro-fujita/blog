import React, { Fragment } from 'react'
import { GetServerSideProps } from 'next'
import IndexTemplate, {
  IndexTemplateProps,
} from '../components/templates/Index'
import { siteConfig } from '../configs/config'
import {
  Post,
  TopPageDocument,
  TopPageQuery,
  TopPageQueryVariables,
} from '../graphql/generated/graphql'
import createApolloClient from '../libs/apollo'
import { NextSeo } from 'next-seo'

export type TopPageProps = {
  posts: Post[]
}

const IndexPage = ({ posts }: TopPageProps): JSX.Element => {
  const props: IndexTemplateProps = {
    posts: posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      description: post.description,
      tags: post.tags,
      createdAt: post.createdAt,
      catchImageUrl: post.catchImage
        ? post.catchImage.url
        : siteConfig.defaultCatchImageUrl,
    })),
  }

  return (
    <Fragment>
      <NextSeo />
      <IndexTemplate {...props} />
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = createApolloClient()

  const { data } = await client.query<TopPageQuery, TopPageQueryVariables>({
    query: TopPageDocument,
    variables: {
      limit: siteConfig.postsPerPage,
      skip: 0,
    },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: data.posts,
    },
  }
}

export default IndexPage
