import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { AllSlugs, AllSlugsQuery } from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = createApolloClient()

  const { data } = await client.query<AllSlugsQuery>({
    query: AllSlugs,
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

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
