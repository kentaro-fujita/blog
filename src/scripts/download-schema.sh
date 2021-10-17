#!/bin/bash

source .env.production.local

dir="./src/graphql/generated/schema.json"

yarn run apollo schema:download --header "Authorization: Bearer $CTF_CPA_TOKEN" \
--endpoint "https://graphql.contentful.com/content/v1/spaces/$CTF_SPACE_ID/environments/master" $dir