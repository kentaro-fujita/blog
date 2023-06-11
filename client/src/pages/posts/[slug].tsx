import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import PostTemplate, {
  PostTemplateProps,
} from "../../components/templates/Post";
import {
  Post,
  PostPageDocument,
  PostPageQuery,
  PostPageQueryVariables,
} from "../../graphql/generated/codegen";
import { siteConfig } from "../../configs/config";
import createApolloClient from "../../libs/apollo";
import { NextSeo } from "next-seo";

export type PostPageProps = {
  post: Post;
};

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
        : siteConfig.defaultCatchImageUrl,
    },
  };
  return (
    <Fragment>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.slug}`,
        }}
      />
      <PostTemplate {...props} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = createApolloClient();
  const slug = query.slug
    ? Array.isArray(query.slug)
      ? query.slug[0]
      : query.slug
    : "";

  const { data } = await client.query<PostPageQuery, PostPageQueryVariables>({
    query: PostPageDocument,
    variables: { slug: slug },
  });

  return {
    props: {
      post: data.post,
    },
  };
};
export default PostPage;
