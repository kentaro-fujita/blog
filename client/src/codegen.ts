import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: ".env.development.local" });

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "./src/graphql/generated/codegen.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./src/graphql/generated/schema.json": {
      plugins: ["introspection"],
    },
  },
  config: {
    skipTypename: true,
  },
};

export default config;
