# ADIP Local — Architecture (Milestone 0)

This document describes the Milestone 0 foundation. It intentionally covers
only what exists today plus the boundaries reserved for later milestones.

## 1. Purpose and deployment target

ADIP Local is a local-first business operating system for **one bakery and
sari-sari store**.

- **Local server / cashier station:** Lenovo ThinkPad L380 running PostgreSQL,
  the FastAPI backend, the React web app, and backups.
- **Primary interface:** the browser on the ThinkPad, plus an optional external
  monitor.
- **Secondary clients:** authorized Android devices through the same local
  Wi-Fi, via an authenticated browser gateway (added in a later milestone).
- **Barcode input:** a physical USB HID keyboard-wedge scanner (later milestone).
- **Explicitly excluded:** Android APK, PWA/Capacitor, Android camera scanning,
  CRM/customer module, multi-tenant SaaS, cloud deployment, and any direct
  browser-to-PostgreSQL access.

The system must keep working without internet access or cloud AI. Cloud AI is
never the authoritative source for financial, inventory, pricing, payment, or
POS data.

## 2. Architectural style

- **Modular monolith.** One backend deployable, internally separated into
  feature modules with explicit boundaries. No microservices, no Kubernetes,
  no Kafka.
- **Backend is the source of truth.** Only FastAPI accesses PostgreSQL.
- **PostgreSQL** is the authoritative multi-user database.
- **Migrations from day one** via Alembic.
- One frontend codebase (React) for both the ThinkPad browser and the future
  Android browser gateway.

## 3. Component view

```text
+----------------------------- Lenovo ThinkPad L380 -----------------------------+
|                                                                                |
|   Browser (ThinkPad)          Android browser (local Wi-Fi, later milestone)   |
|        |                                   |                                   |
|        +-----------------+-----------------+                                   |
|                          v                                                     |
|                 React + TypeScript + Vite (frontend)                           |
|                          |  HTTP/JSON (CORS-configured)                        |
|                          v                                                     |
|                 FastAPI backend (modular monolith)                             |
|                   |      |         |                                           |
|       core/config |   db/session  modules/<feature>                            |
|                          v                                                     |
|                    SQLAlchemy 2.x                                              |
|                          v                                                     |
|                    PostgreSQL 16 (Docker volume: postgres_data)                |
|                                                                                |
|   USB HID barcode scanner (keyboard wedge) - later milestone                   |
+--------------------------------------------------------------------------------+
```

## 4. Backend layout

```text
backend/app/
├─ core/
│  └─ config.py     # pydantic-settings: env-driven config, no secrets in code
├─ db/
│  ├─ base.py       # DeclarativeBase + constraint naming convention
│  └─ session.py    # engine, SessionLocal, get_db() dependency
├─ models/
│  └─ mixins.py     # UUIDPrimaryKeyMixin, OrganizationScopedMixin, TimestampMixin
├─ modules/
│  └─ health/       # router.py (GET /health) + schemas.py
├─ api/
│  └─ router.py     # aggregation point for feature routers
└─ main.py          # FastAPI app: CORS + router registration
```

Each future feature area (products, inventory, POS, cash, reports, ...) becomes
its own `modules/<feature>/` package exposing a router and schemas. Cross-module
communication should go through services and internal events, not direct table
coupling.

## 5. Data model strategy

Even though Milestone 0 defines no business tables, the following rules are
encoded in reusable mixins so every future record is consistent:

- **UUID primary keys** (`UUIDPrimaryKeyMixin`).
- **`organization_id`** on every business-owned record
  (`OrganizationScopedMixin`) — kept for the single local business now, and for
  future growth.

## 6. Configuration and secrets

- Configuration is environment-driven through `pydantic-settings`
  (`backend/app/core/config.py`).
- `.env.example` files hold **placeholders only**. Real `.env` files are
  git-ignored and must never be committed or shared with cloud tools.
- The Docker Compose file reads PostgreSQL credentials from the root `.env`
  (falling back to local placeholders).

## 7. Health and observability

- `GET /health` returns a small JSON document:
  `{ "status": "ok", "service": ..., "version": ..., "environment": ... }`.
  It is a liveness check and does **not** require a database connection.
- The React status page calls `/health` and shows the result, with loading and
  "local server unavailable" states.

## 8. Frontend layout

```text
frontend/src/
├─ components/HealthStatus.tsx    # calls and displays backend health
├─ lib/api.ts                     # fetch wrapper (VITE_API_BASE_URL)
├─ types/health.ts                # shared HealthStatus type
├─ App.tsx, main.tsx, index.css
```

- API base URL comes from `VITE_API_BASE_URL` (no hard-coded dev IPs in code).
- Styling: Tailwind CSS.
- Tests: Vitest + Testing Library (jsdom).

## 9. Future gateway and Android access

- A Caddy reverse proxy (master spec) is planned to front the API/web on the
  ThinkPad, using a stable local hostname or DHCP reservation.
- Android clients will use the same authenticated React app over local Wi-Fi;
  authentication, roles, and audit logging arrive in later milestones.

## 10. Milestone 0 boundaries

Implemented now: project structure, Docker Compose (PostgreSQL + backend),
`GET /health`, React status page, SQLAlchemy configuration, Alembic scaffolding,
pytest + Vitest setups, Ruff/ESLint/Prettier, `.env.example` files, README, and
this document.

Not implemented now: authentication, users/roles, products, inventory, barcode
scanner behavior, bakery production, POS, sales/payments, cash sessions,
expenses, reports, cloud AI, multi-agent AI, PWA, APK, CRM, SaaS, or real
business data.
- **Timezone-aware timestamps** (`TimestampMixin`).

Additional rules reserved for later milestones:

- Money is stored as **integer centavos** (never floats).
- Stock changes create **immutable inventory movements**.
- Completed sales preserve **price and cost snapshots**.
- Duplicate-sensitive operations use **idempotency keys**.
- POS, payments, stock, production, expenses, cash movements, refunds, and
  corrections run inside **database transactions**.
- Sensitive actions are recorded in **append-only audit logs**.