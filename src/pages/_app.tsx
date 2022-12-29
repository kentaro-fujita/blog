import '../styles/globals.css'
import 'katex/dist/katex.min.css'
import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import * as gtag from '../libs/gtag'
import createApolloClient from '../libs/apollo'
import Layout from '../components/templates/Layout'

const BlogApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Google Analytics
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Apollo Client
  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default BlogApp
