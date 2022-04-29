import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: true,
    uri: process.env.GRAPH_CMS_ENDPOINT,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: new InMemoryCache(),
  })
}
export default createApolloClient
