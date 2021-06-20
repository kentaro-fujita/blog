import type { AppProps } from 'next/app'

import '../styles.css'
import 'modern-css-reset/dist/reset.min.css'

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default BlogApp
