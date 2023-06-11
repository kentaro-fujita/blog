import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import IndexTemplate, {
  IndexTemplateProps,
} from "../../components/templates/Index";
import { siteConfig } from "../../configs/config";
import {
  AllSlugsDocument,
  AllSlugsQuery,
  Post,
  TopPageDocument,
  TopPageQuery,
  TopPageQueryVariables,
} from "../../graphql/generated/codegen";
import createApolloClient from "../../libs/apollo";
import { NextSeo } from "next-seo";

export type PageProps = {
  posts: Post[];
  currentPage: number;
  countPages: number;
};

const Page = ({ posts, currentPage, countPages }: PageProps): JSX.Element => {
  const props: IndexTemplateProps = {
    posts: posts.map((post) => {
      return {
        title: post.title,
        slug: post.slug,
        description: post.description,
        tags: post.tags,
        createdAt: post.createdAt,
        catchImageUrl: post.catchImage
          ? post.catchImage.url
          : siteConfig.defaultCatchImageUrl,
      };
    }),
    currentPage: currentPage,
    countPages: countPages,
  };

  return (
    <Fragment>
      <NextSeo
        title="Posts"
        description="posts page of wisteken's blog"
        openGraph={{
          title: "Posts",
          description: "posts page of wisteken's blog",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/pages/${currentPage}`,
        }}
      />
      <IndexTemplate {...props} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = createApolloClient();
  const num = query.num
    ? Array.isArray(query.num)
      ? query.num[0]
      : query.num
    : "1";

  const { data } = await client.query<TopPageQuery, TopPageQueryVariables>({
    query: TopPageDocument,
    variables: {
      skip: (parseInt(num) - 1) * siteConfig.postsPerPage,
      limit: siteConfig.postsPerPage,
    },
  });

  const { data: slugsData } = await client.query<AllSlugsQuery>({
    query: AllSlugsDocument,
  });

  const countPages = (slugsData.slugs.length - 1) / siteConfig.postsPerPage + 1;

  return {
    props: {
      posts: data.posts,
      countPages: countPages,
      currentPage: parseInt(num),
    },
  };
};

export default Page;
