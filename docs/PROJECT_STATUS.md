# ADIP Local Project Status

## Deployment target
- One bakery and sari-sari store
- Lenovo ThinkPad L380 local server and cashier station
- Physical USB HID keyboard-wedge barcode scanner (later milestone)
- Local browser gateway for authorized Android devices (later milestone)
- No APK/PWA, CRM, multi-tenant SaaS, or cloud dependency for core operations

## Current milestone
Milestone 0 — Development foundation

## Last verified commit
Not committed yet. Latest repository commit before this work: `bfe107d`
("Merge branch 'main' of https://github.com/ajdrenales/my-adip-project").
Milestone 0 files are left uncommitted for Owner review (per safety rules).

## Verified working features
- FastAPI application boots and serves `GET /health`
  (verified by running the pytest suite — see Commands run below).
- SQLAlchemy engine/session configuration and declaration base import cleanly.
- Alembic environment loads without error and is ready for future migrations.

## Database migrations applied
- None. `backend/alembic/versions/` is intentionally empty in Milestone 0.

## Known issues
- Frontend `npm install`, Vitest, ESLint/Prettier, and `docker compose` could
  not be executed inside the Linux devcontainer used for this milestone
  (Node.js and Docker are not installed there). These must be run on the
  Windows ThinkPad with Docker Desktop and Node.js 20 LTS.
- Frontend dependency versions are declared but not yet installed, so
  `package-lock.json` does not exist yet.

## Commands run (backend, in this environment)
```bash
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements-dev.txt
ruff check .
ruff format --check .
pytest -q
alembic -c alembic.ini heads
```

## Next exact task
On the ThinkPad, run `docker compose up --build -d`, then
`Invoke-RestMethod http://localhost:8000/health`, and run the frontend
`npm install && npm run test:run && npm run lint && npm run build` checks.
After that, begin Milestone 1 — Database, business identity, and access control.