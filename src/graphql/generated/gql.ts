/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'query TopPage($skip: Int, $limit: Int) {\n  posts(skip: $skip, first: $limit, orderBy: createdAt_DESC) {\n    title\n    slug\n    description\n    tags\n    createdAt\n    catchImage {\n      url\n    }\n  }\n}\n\nquery PostPage($slug: String!) {\n  post(where: {slug: $slug}) {\n    title\n    slug\n    description\n    content\n    tags\n    createdAt\n    updatedAt\n    catchImage {\n      url\n    }\n  }\n}\n\nquery SearchPage($skip: Int, $limit: Int, $word: String, $tags: [String!]) {\n  posts(\n    skip: $skip\n    first: $limit\n    where: {OR: [{tags_contains_some: $tags}, {title_contains: $word}, {slug_contains: $word}]}\n  ) {\n    title\n    slug\n    description\n    tags\n    createdAt\n    updatedAt\n    catchImage {\n      url\n    }\n  }\n  allTags: posts {\n    tags\n  }\n}\n\nquery AllSlugs {\n  slugs: posts {\n    slug\n  }\n}':
    types.TopPageDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query TopPage($skip: Int, $limit: Int) {\n  posts(skip: $skip, first: $limit, orderBy: createdAt_DESC) {\n    title\n    slug\n    description\n    tags\n    createdAt\n    catchImage {\n      url\n    }\n  }\n}\n\nquery PostPage($slug: String!) {\n  post(where: {slug: $slug}) {\n    title\n    slug\n    description\n    content\n    tags\n    createdAt\n    updatedAt\n    catchImage {\n      url\n    }\n  }\n}\n\nquery SearchPage($skip: Int, $limit: Int, $word: String, $tags: [String!]) {\n  posts(\n    skip: $skip\n    first: $limit\n    where: {OR: [{tags_contains_some: $tags}, {title_contains: $word}, {slug_contains: $word}]}\n  ) {\n    title\n    slug\n    description\n    tags\n    createdAt\n    updatedAt\n    catchImage {\n      url\n    }\n  }\n  allTags: posts {\n    tags\n  }\n}\n\nquery AllSlugs {\n  slugs: posts {\n    slug\n  }\n}'
): (typeof documents)['query TopPage($skip: Int, $limit: Int) {\n  posts(skip: $skip, first: $limit, orderBy: createdAt_DESC) {\n    title\n    slug\n    description\n    tags\n    createdAt\n    catchImage {\n      url\n    }\n  }\n}\n\nquery PostPage($slug: String!) {\n  post(where: {slug: $slug}) {\n    title\n    slug\n    description\n    content\n    tags\n    createdAt\n    updatedAt\n    catchImage {\n      url\n    }\n  }\n}\n\nquery SearchPage($skip: Int, $limit: Int, $word: String, $tags: [String!]) {\n  posts(\n    skip: $skip\n    first: $limit\n    where: {OR: [{tags_contains_some: $tags}, {title_contains: $word}, {slug_contains: $word}]}\n  ) {\n    title\n    slug\n    description\n    tags\n    createdAt\n    updatedAt\n    catchImage {\n      url\n    }\n  }\n  allTags: posts {\n    tags\n  }\n}\n\nquery AllSlugs {\n  slugs: posts {\n    slug\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
