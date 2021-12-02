import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: 'https://wisteken.com',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://wisteken.com/posts',
      lastmod: new Date().toISOString(),
    },
  ]

  return getServerSideSitemap(ctx, fields)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
