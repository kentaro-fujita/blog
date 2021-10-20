import {
  ApolloClient,
  InMemoryCache,
  // eslint-disable-next-line import/named
  NormalizedCacheObject,
} from '@apollo/client'

const createApolloClient = (
  preview = false,
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: true,
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE_ID}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CTF_CPA_TOKEN : process.env.CTF_CDA_TOKEN
      }`,
    },
    cache: new InMemoryCache(),
  })
}
export default createApolloClient
