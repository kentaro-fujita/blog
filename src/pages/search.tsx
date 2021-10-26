import React from 'react'
import { GetServerSideProps } from 'next'
import createApolloClient from '../libs/apollo'
import {
  Post,
  SearchPage as GSearchPage,
  SearchPageQuery,
  SearchPageQueryVariables,
} from '../graphql/generated/graphql'
import SearchTemplate, {
  SearchTemplateProps,
} from '../components/templates/Search'

export type SearchPageProps = {
  selectedTags?: string[]
  keyword?: string
  posts: Post[]
  allTags: Post[]
}

const SearchPage = ({
  selectedTags,
  keyword,
  posts,
  allTags,
}: SearchPageProps): JSX.Element => {
  const props: SearchTemplateProps = {
    keyword: keyword,
    selectedTags: selectedTags,
    posts: posts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        description: post.description,
        tags: post.tags,
        createdAt: post.sys.firstPublishedAt,
        catchImageUrl: post.catchImage.url,
      }
    }),
    allTags: [].concat(...allTags.map(({ tags }) => tags)),
  }
  return <SearchTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = createApolloClient()

  const tags = query.tags
    ? Array.isArray(query.tags)
      ? query.tags
      : [query.tags]
    : []
  const keyword = query.keyword
    ? Array.isArray(query.keyword)
      ? query.keyword[0]
      : query.keyword
    : ''

  const { data } = await client.query<
    SearchPageQuery,
    SearchPageQueryVariables
  >({
    query: GSearchPage,
    variables: {
      tags: tags,
      word: keyword,
    },
  })

  return {
    props: {
      selectedTags: tags,
      keyword: keyword,
      posts: data.posts.items,
      allTags: data.allTags.items,
    },
  }
}

export default SearchPage
