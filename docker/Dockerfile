FROM node:18.12.1

WORKDIR /app/src

COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY ./ ./

CMD ["yarn", "dev"]
