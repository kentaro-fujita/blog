import React, { Fragment } from 'react'
import { GetServerSideProps } from 'next'
import IndexTemplate, {
  IndexTemplateProps,
} from '../components/templates/Index'
import { siteConfig } from '../configs/config'
import {
  AllSlugsDocument,
  AllSlugsQuery,
  Post,
  TopPageDocument,
  TopPageQuery,
  TopPageQueryVariables,
} from '../graphql/generated/graphql'
import createApolloClient from '../libs/apollo'
import { NextSeo } from 'next-seo'

export type TopPageProps = {
  posts: Post[]
  countPages: number
}

const IndexPage = ({ posts, countPages }: TopPageProps): JSX.Element => {
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
    currentPage: 1,
    countPages: countPages,
  }

  return (
    <Fragment>
      <NextSeo
        title="Home"
        description="wisteken's blog"
        openGraph={{
          title: 'Home',
          description: "wisteken's blog",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        }}
      />
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

  const { data: slugsData } = await client.query<AllSlugsQuery>({
    query: AllSlugsDocument,
  })

  const countPages = (slugsData.slugs.length - 1) / siteConfig.postsPerPage + 1

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: data.posts,
      countPages: countPages,
    },
  }
}

export default IndexPage
