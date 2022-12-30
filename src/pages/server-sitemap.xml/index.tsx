import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps, NextPage } from 'next'
import React, { Fragment } from 'react'
import {
  AllSlugsDocument,
  AllSlugsQuery,
} from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = createApolloClient()

  const { data } = await client.query<AllSlugsQuery>({
    query: AllSlugsDocument,
  })

  const fields: ISitemapField[] =
    (data.slugs ?? []).map((item) => {
      return {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${item.slug ?? ''}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.7,
      }
    }) ?? []

  return getServerSideSitemap(ctx, fields)
}

const SiteMapPage: NextPage = () => {
  return <Fragment></Fragment>
}

export default SiteMapPage
