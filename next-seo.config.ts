import { DefaultSeoProps } from 'next-seo'
import { siteConfig } from './src/configs/config'

const seoConfig: DefaultSeoProps = {
  titleTemplate: `%s | ${siteConfig.siteName}`,
  defaultTitle: siteConfig.siteName,
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: siteConfig.siteAuthor,
    },
    {
      name: 'application-name',
      content: siteConfig.siteName,
    },
  ],
  openGraph: {
    url: siteConfig.siteUrl,
    type: 'website',
    locale: 'ja_JP',
    siteName: siteConfig.siteName,
    description: "wisteken's blog",
    images: [
      {
        url: siteConfig.defaultCatchImageUrl,
        width: 1048,
        height: 550,
        alt: 'catch_image',
        type: 'image/png',
      },
    ],
  },
}

export default seoConfig
