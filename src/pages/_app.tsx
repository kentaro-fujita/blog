import '../styles/globals.css'
import 'katex/dist/katex.min.css'
import React, { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import { usePageView } from '../libs/gtag'
import createApolloClient from '../libs/apollo'
import Layout from '../components/templates/Layout'
import seoConfig from '../../next-seo.config'

const BlogApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Google Analytics
  usePageView()

  // Apollo Client
  const client = createApolloClient()

  return (
    <Fragment>
      <Head>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
      </Head>
      <DefaultSeo {...seoConfig} />
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </Fragment>
  )
}

export default BlogApp
