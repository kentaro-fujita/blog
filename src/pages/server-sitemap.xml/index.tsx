import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import config from '../../configs/config.json'
import {
  TopPage,
  TopPageQuery,
  TopPageQueryVariables,
} from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = createApolloClient()

  const { data } = await client.query<TopPageQuery, TopPageQueryVariables>({
    query: TopPage,
    variables: {
      limit: config.postsPerPage,
      skip: 0,
    },
  })

  const fields =
    (data.allSlugs ?? []).map((item) => {
      return {
        loc: `https://wisteken.com/posts/${item.slug ?? ''}`,
        lastmod: new Date().toISOString(),
      }
    }) ?? []

  return getServerSideSitemap(ctx, fields)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
