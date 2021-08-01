FROM node:16.4.1-alpine3.13

# OS packages
RUN apk add --no-cache --upgrade yamllint
RUN npm install --global npm 2&> /dev/null
RUN npm install --global pnpm

# App
WORKDIR /app
ADD . .
RUN pnpm install
