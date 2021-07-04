FROM node:16-alpine3.13

# OS packages
RUN apk add --no-cache --upgrade yamllint
RUN npm install --global npm
RUN npm install --global pnpm

# App
WORKDIR /app
ADD . .
RUN pnpm install
