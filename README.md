# ADIP Local — Bakery & Sari-Sari Store System

ADIP (Adaptive Decision Intelligence Platform) Local is a local-first business
operating system for **one bakery and sari-sari store**. It runs entirely on a
local Lenovo ThinkPad L380 — no cloud, no subscription, no dependency on an AI
service for core operations.

> **Current milestone: Milestone 0 — Development foundation.**
> This repository currently contains only the runnable application skeleton
> (PostgreSQL + FastAPI backend + React frontend + tooling). No business
> features are implemented yet.

## Scope of Milestone 0

Built:

- Root project structure (modular monolith).
- Docker Compose for PostgreSQL and the FastAPI backend.
- FastAPI `GET /health` endpoint.
- React health/status page that calls and displays backend health.
- SQLAlchemy 2.x database configuration.
- Alembic configuration ready for future migrations.
- Backend test setup (pytest) and frontend test setup (Vitest).
- Linting (Ruff, ESLint, Prettier).
- `.env.example` files (placeholders only).
- `docs/architecture.md` and `docs/PROJECT_STATUS.md`.

Deliberately **not** built yet: authentication, users/roles, products,
inventory, barcode scanner behavior, bakery production, POS, sales/payments,
cash sessions, expenses, reports, cloud AI, multi-agent AI, PWA, Android APK,
CRM, SaaS, or any real business data.

## Deployment target

- **Lenovo ThinkPad L380** hosts the local server, PostgreSQL, the React web
  app, backups, and the primary cashier browser session.
- A **physical USB HID keyboard-wedge barcode scanner** will be used later.
- **Android devices** will later access the app through authenticated browser
  access on the same local Wi-Fi. No APK and no PWA.
- Only the backend is allowed to talk to PostgreSQL. Browsers never connect to
  the database directly.

## Technology

| Layer | Technology |
| --- | --- |
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| Backend | Python, FastAPI, Pydantic, SQLAlchemy 2.x, Alembic |
| Database | PostgreSQL |
| Deployment | Docker Compose |
| Backend tests | pytest |
| Frontend tests | Vitest |
| Linting | Ruff, ESLint, Prettier |
| Architecture | Modular monolith |
## Repository structure

```text
my-adip-project/
├─ backend/                 # FastAPI modular monolith
│  ├─ app/
│  │  ├─ core/              # config (pydantic-settings)
│  │  ├─ db/                # engine, session, declarative Base
│  │  ├─ models/            # mixins (UUID PK, organization_id) — no tables yet
│  │  ├─ modules/           # feature modules (health only in Milestone 0)
│  │  ├─ api/               # router aggregation
│  │  └─ main.py            # FastAPI app entry point
│  ├─ alembic/              # migration environment (versions/ empty)
│  ├─ tests/                # pytest suite
│  ├─ alembic.ini
│  ├─ pyproject.toml        # Ruff + pytest config
│  ├─ requirements.txt
│  └─ requirements-dev.txt
├─ frontend/                # React + TypeScript + Vite + Tailwind
│  ├─ src/
│  │  ├─ components/        # HealthStatus component + test
│  │  ├─ lib/api.ts         # backend fetch wrapper
│  │  ├─ types/health.ts
│  │  └─ main.tsx, App.tsx
│  ├─ vitest.config.ts
│  ├─ eslint.config.js
│  └─ package.json
├─ docs/                    # specification + architecture + status
├─ docker-compose.yml       # PostgreSQL + backend
├─ .env.example
└─ README.md
```

## Prerequisites (Windows 11 / ThinkPad L380)

- **Docker Desktop** (for PostgreSQL and the backend container).
- **Python 3.11+** (backend local development and tests).
- **Node.js 20 LTS+** with npm (frontend development, tests, build).
- **PowerShell 5.1+** (all commands below are PowerShell).

All commands are run from the repository root
(`C:\path\to\my-adip-project`) unless a `cd` is shown.

## 1. First-time setup

```powershell
# 1a. Create local environment files from the examples.
Copy-Item .env.example .env
Copy-Item .\backend\.env.example .\backend\.env
Copy-Item .\frontend\.env.example .\frontend\.env

# 1b. Backend virtual environment + dependencies.
cd .\backend
python -m venv .venv
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements-dev.txt
cd ..

# 1c. Frontend dependencies.
cd .\frontend
npm install
cd ..
```

> If `Activate.ps1` is blocked by execution policy, the
> `Set-ExecutionPolicy -Scope Process ...` line above is a temporary,
> process-only bypass. It does not change machine-wide settings.

## 2. Start the stack

```powershell
# Start PostgreSQL + FastAPI backend (Docker).
docker compose up --build -d

# In a second PowerShell window, start the React dev server.
cd .\frontend
npm run dev
```

- Backend API: <http://localhost:8000>
- API docs:   <http://localhost:8000/docs>
- Frontend:   <http://localhost:5173>

## 3. Verify the health endpoint

```powershell
# From PowerShell
Invoke-RestMethod http://localhost:8000/health
# Expected: status=ok, plus service, version, and environment fields.

# If you prefer to see the raw JSON:
Invoke-WebRequest http://localhost:8000/health | Select-Object -ExpandProperty Content
```

The frontend status page (`http://localhost:5173`) calls this endpoint and
displays the status, service name, version, and environment.

## 4. Run tests

### Backend (pytest)

```powershell
cd .\backend
.\.venv\Scripts\Activate.ps1
pytest
cd ..
```

### Frontend (Vitest)

```powershell
cd .\frontend

# Watch mode (development)
npm run test

# Single run (CI / one-off check)
npm run test:run

cd ..
```

## 5. Lint and format

### Backend (Ruff)

```powershell
cd .\backend
.\.venv\Scripts\Activate.ps1

ruff check .            # report lint issues
ruff check . --fix      # auto-fix safe issues
ruff format --check .   # verify formatting
ruff format .           # apply formatting

cd ..
```

### Frontend (ESLint + Prettier)

```powershell
cd .\frontend

npm run lint            # ESLint
npm run format:check    # Prettier check
npm run format          # Prettier write

cd ..
```

## 6. Build

### Frontend production build

```powershell
cd .\frontend
npm run build           # runs tsc -b, then vite build → ./dist
npm run preview         # optional: serve the built assets locally
cd ..
```

### Backend container image

```powershell
docker compose build backend
```

## 7. Stop

```powershell
# Stop containers but KEEP the database data (safe, non-destructive).
docker compose stop

# Stop and remove containers and the network, still KEEPING the data volume.
docker compose down
```

> `docker compose down -v` is intentionally **not** documented and must not be
> used: `-v` deletes the PostgreSQL data volume.

## 8. Safe reset

A safe reset removes containers and a *deliberately chosen* named volume after
the stack has been stopped. Use it only when you truly want a clean database
(for example, before a fresh Milestone 1 migration).

```powershell
# 1. Stop the stack (keeps data).
docker compose down

# 2. Inspect existing volumes.
docker volume ls

# 3. Remove ONLY the project's data volume (deletes local database data).
docker volume rm my-adip-project_postgres_data

# 4. Recreate the stack.
docker compose up --build -d
```

Never run broad destructive commands such as `docker system prune -a --volumes`
or `docker volume prune` on the shop server.

## 9. Environment files

Only `.env.example` files are tracked by Git. Copy them to real `.env` files
locally; the real files are ignored by `.gitignore`.

| File | Purpose |
| --- | --- |
| `.env.example` | Docker Compose: Postgres credentials + backend port/origins |
| `backend/.env.example` | Backend when run outside Docker |
| `frontend/.env.example` | Frontend `VITE_API_BASE_URL` |

**Secrets rules**

- Never commit a real `.env` file, password, API key, database dump, or backup.
- Never paste `.env` contents or dumps into a cloud AI tool.
- Keep credentials as placeholders in the `.env.example` files only.

## 10. Android access (later milestones)

Android devices will reach the app through the *same* React app served on the
ThinkPad over local Wi-Fi, with authenticated browser access added in a later
milestone. There is no APK and no PWA. No client connects to PostgreSQL
directly.

## 11. How to add a future migration (Alembic)

```powershell
cd .\backend
.\.venv\Scripts\Activate.ps1

# Autogenerate a migration after changing models (Milestone 1+).
alembic revision --autogenerate -m "describe change here"

# Apply migrations.
alembic upgrade head

# Show current revision.
alembic current

cd ..
```

## Reference documents

- `docs/ADIP_Local_ThinkPad_OneBusiness_NoCRM.md` — master specification.
- `docs/ADIP_Local_Zero_Cost_Milestones_and_AI_Playbook.md` — milestones and AI playbook.
- `docs/architecture.md` — Milestone 0 architecture notes.
- `docs/PROJECT_STATUS.md` — current build status.
- Frontend:   <http://localhost:5173>