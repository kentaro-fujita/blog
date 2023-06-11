import { getServerSideSitemapLegacy, ISitemapField } from "next-sitemap";
import { GetServerSideProps, NextPage } from "next";
import React, { Fragment } from "react";
import {
  AllSlugsDocument,
  AllSlugsQuery,
} from "../../graphql/generated/codegen";
import createApolloClient from "../../libs/apollo";

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const client = createApolloClient();

  const { data } = await client.query<AllSlugsQuery>({
    query: AllSlugsDocument,
  });

  const fields: ISitemapField[] =
    (data.slugs ?? []).map((item) => {
      return {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${item.slug ?? ""}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.7,
      };
    }) ?? [];

  return getServerSideSitemapLegacy(context, fields);
};

const SiteMapPage: NextPage = (): JSX.Element => {
  return <Fragment />;
};

export default SiteMapPage;
