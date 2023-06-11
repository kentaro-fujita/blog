FROM node:18.16 AS build
WORKDIR /usr/src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.16
WORKDIR /usr/src
COPY --from=build /usr/src/node_modules ./node_modules
COPY --from=build /usr/src/.next ./.next
COPY --from=build /usr/src/public ./public
COPY --from=build /usr/src/next.config.js ./next.config.js

CMD ["npm", "run", "start"]
