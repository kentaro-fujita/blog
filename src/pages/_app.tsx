import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import 'modern-css-reset/dist/reset.min.css'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import * as gtag from '../libs/gtag'
import createApolloClient from '../libs/apollo'

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
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default BlogApp
