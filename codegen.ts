import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.development.local' })

const config: CodegenConfig = {
  schema: process.env.GRAPH_CMS_ENDPOINT,
  documents: ['src/graphql/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
