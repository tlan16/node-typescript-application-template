FROM node:18.12.1-alpine3.17

# OS packages
RUN apk add --no-cache --upgrade \
    yamllint \
    bash

# App
WORKDIR /app
ADD . .
RUN yarn --immutable
