# wisteken blog

## setup for development

### set environment variables

edit `GRAPH_CMS_ENDPOINT`.

```shell
cp .env.local.example .env.development.local
vi .env.development.local
```

### run as development mode

```shell
docker-compose build
docker-compose up -d
```

open [http://localhost:30000](http://localhost:3000).
