FROM node:17.9.1-alpine3.15

# OS packages
RUN apk add --no-cache --upgrade yamllint

# App
WORKDIR /app
ADD . .
RUN yarn
