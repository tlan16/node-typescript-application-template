FROM node:22-alpine

# OS packages
RUN apk add --no-cache \
    yamllint \
    bash \
    && rm -rf /var/cache/apk/*

# Node
RUN corepack enable pnpm

# App
WORKDIR /app
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY .npmrc .npmrc
RUN pnpm install --frozen-lockfile
COPY . .

# Boot
ENTRYPOINT ["pnpm"]
CMD ["run", "start"]
