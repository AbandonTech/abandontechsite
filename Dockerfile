FROM node:20 as deps

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock ./
RUN yarn install

FROM node:20-alpine AS builder

WORKDIR /build

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn run nuxt build

FROM builder AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nuxt -u 1001

COPY --from=builder /build/.output ./.output

USER nuxt

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
