import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import PostTemplate, {
  PostTemplateProps,
} from '../../components/templates/Post'
import config from '../../configs/config.json'
import {
  AllSlugs,
  AllSlugsQuery,
  AllTags,
  AllTagsQuery,
  AllTagsQueryVariables,
  LatestPosts,
  LatestPostsQuery,
  LatestPostsQueryVariables,
  Post,
  PostPage as GPostPage,
  PostPageQuery,
  PostPageQueryVariables,
} from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'

export type PostPageProps = {
  post: Post
  latestPosts: Post[]
  tags: string[]
}

const PostPage = ({ post }: PostPageProps): JSX.Element => {
  const props: PostTemplateProps = {
    post: {
      title: post.title,
      tags: post.tags,
      content: post.content,
      createdAt: post.sys.firstPublishedAt,
      updatedAt: post.sys.publishedAt,
    },
    latestPosts: [],
    tags: [],
  }
  return <PostTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createApolloClient()
  const { data } = await client.query<AllSlugsQuery>({
    query: AllSlugs,
  })

  return {
    fallback: true,
    paths: data.postCollection.items.map(({ slug }) => ({ params: { slug } })),
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createApolloClient()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const PostPageQueryResult = await client.query<
    PostPageQuery,
    PostPageQueryVariables
  >({
    query: GPostPage,
    variables: {
      limit: 1,
      skip: 0,
      slug: slug,
    },
  })

  const LatestPostsQueryResult = await client.query<
    LatestPostsQuery,
    LatestPostsQueryVariables
  >({
    query: LatestPosts,
    variables: {
      limit: config.latestPostPerPage,
      skip: 0,
    },
  })

  const AllTagsQueryResult = await client.query<
    AllTagsQuery,
    AllTagsQueryVariables
  >({
    query: AllTags,
  })

  return {
    props: {
      post: PostPageQueryResult.data.postCollection.items[0],
      latestPosts: LatestPostsQueryResult.data.postCollection.items,
      tags: [...AllTagsQueryResult.data.postCollection.items],
    },
  }
}
export default PostPage
