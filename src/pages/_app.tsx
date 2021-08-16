import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import 'modern-css-reset/dist/reset.min.css'
import { useRouter } from 'next/router'
import * as gtag from '../libs/gtag'

const BlogApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Google Analyticsをページ遷移時にも対応させる
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

  return <Component {...pageProps} />
}

export default BlogApp
