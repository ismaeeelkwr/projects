# KWR Networks Portal

Production-ready Wi-Fi voucher management and captive portal for Huawei AP362 / Starlink-powered hotspots. The monorepo bundles the Next.js portal/admin frontend, NestJS API, shared UI components, Prisma schema, and Dockerized infra so the service can run on `https://portal.kwrnetworks.xyz` with Caddy-provided TLS.

## Monorepo layout
```
apps/
  frontend   # Next.js 14 portal + admin
  backend    # NestJS API server (Prisma, BullMQ, Paystack, Huawei portal)
packages/
  ui         # shadcn-based shared components
infra/
  docker-compose.yml  # Prod stack (Caddy, Nginx, backend, frontend, Postgres, Redis)
  Caddyfile
  nginx.conf
prisma/
  schema.prisma
scripts/
  create-admin.ts
```

## Getting started
```bash
pnpm install
pnpm prisma generate
cp .env.example .env
cp apps/frontend/.env.example apps/frontend/.env.local
```
Set the environment variables for Postgres, Redis, Paystack, Huawei controller, and Starlink probe endpoints.

### Downloadable ZIP bundle
- Generate an exportable archive at any time with `pnpm package:zip`. The script writes `release/kwr-networks-portal.zip` locally while automatically excluding `node_modules`, `.git`, build artifacts, and prior release bundles.
- Because the ZIP can be large and triggers "binary files are not supported" errors on GitHub, it is ignored from version control—run the command whenever you need a fresh copy to share or deploy.

### Local development
```bash
pnpm --filter @kwr/backend dev      # NestJS API at http://localhost:4000
pnpm --filter @kwr/frontend dev     # Next.js portal at http://localhost:3000
```
Both apps share authentication via NextAuth credentials that proxy to the backend login endpoint.

### Database
Apply migrations with Prisma:
```bash
pnpm prisma migrate dev
```
Seed an admin user after the DB is ready:
```bash
pnpm ts-node scripts/create-admin.ts admin@example.com strong_password
```

### Tests
```bash
pnpm --filter @kwr/backend test
```
Vitest + Supertest validate the critical API surfaces.

### Docker / deployment
1. Provision a VPS and point `portal.kwrnetworks.xyz` to its IP.
2. Copy `.env` and the Paystack webhook secret to the server.
3. Build and run the stack:
   ```bash
   docker compose -f infra/docker-compose.yml up -d --build
   ```
4. Caddy auto-issues certificates and reverse proxies `/` to the Next.js frontend, `/api` to the NestJS backend.
5. Configure Huawei AP362 external portal to call `https://portal.kwrnetworks.xyz/api/portal/authorize` and `/logout` with the provided token.

### Paystack webhook
Set `https://portal.kwrnetworks.xyz/api/pay/webhook` in your Paystack dashboard. The backend validates the signature via `PAYSTACK_SECRET`.

### Starlink monitoring
The BullMQ worker (apps/backend/src/starlink/starlink.worker.ts) pings `STARLINK_PROBE_HOST` every minute and optional speed-tests every 10 minutes (when `STARLINK_SPEEDTEST_ENABLED=true`). Results are visible in `/admin/network`.

## Branding
Tailwind theme + shadcn tokens:
- Primary: `#0A84FF`
- Surface: `#111827`
- Muted background: `#F3F4F6`

Enjoy building with KWR Networks! ✨
