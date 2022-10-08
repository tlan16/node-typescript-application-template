FROM node:18.10.0

# OS packages
RUN apk add --no-cache --upgrade yamllint

# App
WORKDIR /app
ADD . .
RUN yarn
