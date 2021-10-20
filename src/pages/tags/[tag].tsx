import React from 'react'
import { GetServerSideProps } from 'next'
import createApolloClient from '../../libs/apollo'
import {
  Post,
  TagPage as GTagPage,
  TagPageQuery,
  TagPageQueryVariables,
} from '../../graphql/generated/graphql'
import TagsTemplate, { TagsTemplateProps } from '../../components/templates/Tag'

export type TagsPageProps = {
  selectedTags: string[]
  posts: Post[]
  latestPosts: Post[]
  allTags: Post[]
}

const TagsPage = ({
  selectedTags,
  posts,
  latestPosts,
  allTags,
}: TagsPageProps): JSX.Element => {
  const props: TagsTemplateProps = {
    selectedTags: selectedTags,
    posts: posts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        description: post.description,
        tags: post.tags,
        createdAt: post.sys.firstPublishedAt,
      }
    }),
    latestPosts: latestPosts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        createdAt: post.sys.firstPublishedAt,
      }
    }),
    tags: [].concat(...allTags.map(({ tags }) => tags)),
  }
  return <TagsTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = createApolloClient()

  const tags = Array.isArray(params.tag) ? params.tag : [params.tag]
  const { data } = await client.query<TagPageQuery, TagPageQueryVariables>({
    query: GTagPage,
    variables: {
      tags: tags,
    },
  })

  return {
    props: {
      selectedTags: tags,
      posts: data.posts.items,
      latestPosts: data.latestPosts.items,
      allTags: data.allTags.items,
    },
  }
}

export default TagsPage
