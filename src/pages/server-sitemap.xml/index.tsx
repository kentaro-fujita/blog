import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps, NextPage } from 'next'
import {
  AllSlugsDocument,
  AllSlugsQuery,
} from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'
import { Fragment } from 'react'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = createApolloClient()

  const { data } = await client.query<AllSlugsQuery>({
    query: AllSlugsDocument,
  })

  const fields =
    (data.slugs ?? []).map((item) => {
      return {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${item.slug ?? ''}`,
        lastmod: new Date().toISOString(),
      }
    }) ?? []

  return getServerSideSitemap(ctx, fields)
}

const SiteMapPage: NextPage = () => {
  return <Fragment></Fragment>
}
export default SiteMapPage
