## Pilot Rollout Steps (Deterministic)

- **prepare-staging**: Provision `STAGING_BASE_URL`, Postgres, and object storage. Output JSON with endpoints.
- **seed-data**: Run `npm run db:seed` and export a SHA256 of seed fixtures.
- **deploy-staging**: Build (`bunx next build`) and deploy (Vercel or container). Output deployment URL.
- **run-smoke**: Hit `/api/health` and core pages. Save responses to `ops/artifacts/staging-smoke.json` with timestamps and digests.
- **enable-logging**: Ensure request logs and error tracking (Sentry) are active; emit DSN and environment in JSON.
- **collect-feedback**: Structured pilot feedback form; export CSV and digest.
