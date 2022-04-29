#!/bin/bash

source .env.development.local

dir="./src/graphql/generated/schema.json"

yarn run apollo client:download-schema --endpoint="$NEXT_GRAPH_CMS_ENDPOINT" $dir
