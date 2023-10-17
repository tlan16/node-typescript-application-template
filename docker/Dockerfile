FROM node:18.18.2-alpine3.17

# OS packages
RUN apk add --no-cache --upgrade \
    yamllint \
    bash

# App
WORKDIR /app
ADD . .
RUN yarn --immutable
