FROM node:14.17.0-alpine3.13

# OS packages
RUN apk add --no-cache --upgrade yamllint

# App
WORKDIR /app
ADD . .
RUN yarn --immutable
