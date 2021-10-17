import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import PostTemplate, {
  PostTemplateProps,
} from '../../components/templates/Post'
import {
  GetAllSlugs,
  GetAllSlugsQuery,
  Post,
  PostPage as GPostPage,
  PostPageQuery,
  PostPageQueryVariables,
} from '../../graphql/generated/graphql'
import createApolloClient from '../../libs/apollo'

export type PostPageProps = {
  post: Post
  latestPosts: Post[]
  allTags: Post[]
}

const PostPage = ({
  post,
  latestPosts,
  allTags,
}: PostPageProps): JSX.Element => {
  const props: PostTemplateProps = {
    post: {
      title: post.title,
      description: post.description,
      content: post.content,
      tags: post.tags,
      createdAt: post.sys.firstPublishedAt,
      updatedAt: post.sys.publishedAt,
      catchImageUrl: post.catchImage.url,
    },
    latestPosts: latestPosts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        createdAt: post.sys.firstPublishedAt,
      }
    }),
    tags: [].concat(...allTags.map(({ tags }) => tags)),
  }
  return <PostTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createApolloClient()
  const { data } = await client.query<GetAllSlugsQuery>({
    query: GetAllSlugs,
  })

  return {
    fallback: false,
    paths: data.allSlugs.items.map(({ slug }) => ({ params: { slug } })),
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createApolloClient()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const { data } = await client.query<PostPageQuery, PostPageQueryVariables>({
    query: GPostPage,
    variables: {
      limit: 1,
      skip: 0,
      slug: slug,
    },
  })

  return {
    props: {
      post: data.posts.items[0],
      latestPosts: data.latestPosts.items,
      allTags: data.allTags.items,
    },
  }
}
export default PostPage
