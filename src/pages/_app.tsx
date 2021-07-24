import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import 'modern-css-reset/dist/reset.min.css'

const BlogApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default BlogApp
