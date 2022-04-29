import React from 'react'
import { GetServerSideProps } from 'next'
import PostTemplate, {
  PostTemplateProps,
} from '../../components/templates/Post'
import {
  Post,
  PostPage as GPostPage,
  PostPageQuery,
  PostPageQueryVariables,
} from '../../graphql/generated/graphql'
import config from '../../configs/config.json'
import createApolloClient from '../../libs/apollo'

export type PostPageProps = {
  post: Post
}

const PostPage = ({ post }: PostPageProps): JSX.Element => {
  const props: PostTemplateProps = {
    post: {
      title: post.title,
      description: post.description,
      content: post.content,
      allTags: post.tags,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      catchImageUrl: post.catchImage
        ? post.catchImage.url
        : config.default_catch_image_url,
    },
  }
  return <PostTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = createApolloClient()
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug

  const { data } = await client.query<PostPageQuery, PostPageQueryVariables>({
    query: GPostPage,
    variables: { slug: slug },
  })

  return {
    props: {
      post: data.post,
    },
  }
}
export default PostPage
