FROM node:18.10.0-alpine3.15

# OS packages
RUN apk add --no-cache --upgrade yamllint

# App
WORKDIR /app
ADD . .
RUN yarn --immutable
