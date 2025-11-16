FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/frontend/package.json apps/frontend/package.json
COPY packages/ui/package.json packages/ui/package.json
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm --filter @kwr/frontend build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/apps/frontend/.next ./.next
COPY --from=deps /app/apps/frontend/package.json ./package.json
COPY --from=deps /app/apps/frontend/public ./public
RUN npm install next react react-dom
CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
