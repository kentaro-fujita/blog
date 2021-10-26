import React, { Fragment } from 'react'
import Head from 'next/head'
import config from '../../configs/config.json'
import SearchView, { SearchViewProps } from '../organisms/SearchView'
import SearchInput from '../molecules/SearchInput'

export type SearchTemplateProps = SearchViewProps & {
  keyword?: string
}

const SearchTemplate: React.FC<SearchTemplateProps> = ({
  keyword,
  selectedTags,
  allTags,
  posts,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{`${keyword} ${selectedTags.join(',')} - ${
          config.siteName
        }`}</title>
        <meta name="viewpoint" content="initial-scale=1.0, with=device-width" />
        <meta name="description" content={config.siteName} />
        <meta property="og:title" content={`Tags page - ${config.siteName}`} />
        <meta property="og:site_name" content={config.siteName} />
        <meta
          property="og:description"
          content={`Tags page of ${config.siteName}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/digest_image.png`}
        />
      </Head>
      <SearchInput value={keyword} />
      <SearchView selectedTags={selectedTags} posts={posts} allTags={allTags} />
    </Fragment>
  )
}
export default SearchTemplate
