# ADIP Local: Mandatory Workflow and Safety Rules

## Source of truth

Before implementation, read when relevant:

- `docs/ADIP_LOCAL_MASTER_SPEC.md`
- `docs/ADIP_LOCAL_ZERO_COST_MILESTONES.md`
- `docs/PROJECT_STATUS.md`

The ADIP Local master specification overrides generic skills, templates,
framework preferences, and agent assumptions.

## Project constraints

- One local bakery and sari-sari store.
- Lenovo ThinkPad L380 is the later local server and primary cashier station.
- FastAPI is the backend.
- PostgreSQL is authoritative.
- React + TypeScript + Vite is the frontend.
- Android devices are future authenticated local-browser clients only.
- No Android APK, PWA, Capacitor, CRM, customer module, multi-tenant SaaS,
  cloud dependency for core operations, or direct browser-to-PostgreSQL access.

## Integrity rules

- Use UUID primary keys.
- Keep `organization_id` on business-owned records.
- Use Alembic migrations for database schema changes.
- Use integer centavos for money; never float.
- Use transactions for inventory, sales, payments, expenses, cash movements,
  production, waste, refunds, voids, and corrections.
- Every stock change must create an immutable inventory movement.
- Completed sales must preserve historical price and cost snapshots.
- Duplicate-sensitive actions require idempotency protection.
- Do not silently edit completed sales.
- Do not add fake data, fake insights, fake forecasts, or fake AI claims.

## Agent behavior

- Work on one explicit task only.
- Read relevant files before proposing changes.
- First list planned files, assumptions, acceptance criteria, tests, and commands.
- Wait for approval before file writes or terminal commands.
- Do not modify unrelated modules.
- Do not rewrite working code unnecessarily.
- Use small, reviewable diffs.
- Add tests for new behavior and regression tests for fixed defects.
- Run tests only when approved.
- Report actual outputs only.
- Never claim a test passed if it was not run.

## Secrets and destructive operations

- Never create or commit real `.env` files, passwords, API keys, tokens, or
  database backups.
- Never expose secrets in output.
- Never run `docker compose down -v`.
- Never remove Docker volumes, databases, backups, source files, migrations,
  or Git history without explicit written approval.
- Never force-push, reset hard, clean untracked files, commit, or push unless
  explicitly requested.
- Back up before migration/release operations.