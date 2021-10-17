import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Index, { IndexProps } from '../../components/templates/Index'
import config from '../../configs/config.json'
import {
  AllSlugs,
  AllSlugsQuery,
  TopPage,
  TopPageQuery,
  TopPageQueryVariables,
} from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'

const Page: React.FC<IndexProps> = (props) => {
  return <Index {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createApolloClient()
  const { data } = await client.query<AllSlugsQuery>({
    query: AllSlugs,
  })
  const pages = (data.postCollection.items.length - 1) / config.postsPerPage + 1

  return {
    fallback: true,
    paths: [...Array(pages).keys()].map((num) => ({
      params: { num: `${num}` },
    })),
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createApolloClient()
  const num = Array.isArray(params.num) ? params.num[0] : params.num

  const { data } = await client.query<TopPageQuery, TopPageQueryVariables>({
    query: TopPage,
    variables: {
      skip: parseInt(num) * config.postsPerPage,
      limit: config.postsPerPage,
    },
  })

  return {
    fallback: true,
    props: {
      ...data,
    },
  }
}

export default Page
