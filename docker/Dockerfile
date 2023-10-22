FROM node:18.12-alpine AS builder
WORKDIR /app/src
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --frozen-lockfile --non-interactive
COPY . ./
RUN yarn build

FROM node:18.12-alpine
WORKDIR /app/src
COPY --from=builder /app/src/.next ./.next
COPY --from=builder /app/src/public ./public
COPY --from=builder /app/src/node_modules ./node_modules
COPY --from=builder /app/src/next.config.js ./
CMD ["yarn", "start"]
