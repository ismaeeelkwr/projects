FROM node:20-alpine AS base
WORKDIR /app
COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/backend/package.json apps/backend/package.json
COPY apps/frontend/package.json apps/frontend/package.json
COPY packages/ui/package.json packages/ui/package.json
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm --filter @kwr/backend build

FROM node:20-alpine
WORKDIR /app
COPY --from=base /app/apps/backend/dist ./dist
COPY --from=base /app/apps/backend/package.json ./package.json
RUN npm install --omit=dev
CMD ["node", "dist/main.js"]
