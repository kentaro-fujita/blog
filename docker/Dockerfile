FROM node:16.15.0

WORKDIR /app/src

COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY ./ ./

CMD ["yarn", "dev"]
