FROM node:20.4.0-alpine3.18

# OS packages
RUN apk add --no-cache --upgrade \
    yamllint \
    bash

# App
WORKDIR /app
ADD . .
RUN yarn --immutable
