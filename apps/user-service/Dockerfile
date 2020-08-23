FROM node:12-alpine

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

RUN mkdir -p /usr/src/app
ADD . /usr/src/app

WORKDIR /usr/src/app

RUN yarn global add @nestjs/cli

# Build app
RUN nest build

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["node", "dist/apps/user-service/main.js"]
