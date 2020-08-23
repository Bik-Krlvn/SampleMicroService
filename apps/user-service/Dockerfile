FROM node:12-alpine
# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

RUN mkdir -p /usr/src/app
ADD . /usr/src/app

WORKDIR /usr/src/app





# Bundle app source
COPY . .

EXPOSE 3000
CMD ["node", "dist/apps/user-service/main.js"]
