# ADIP Local — ₱0 Build Milestones and AI-Assisted Development Playbook

## Purpose

This document turns the ADIP Local master specification into a practical build order for one bakery and sari-sari business.

Deployment target:

- Lenovo ThinkPad L380 at the shop.
- ThinkPad runs the local FastAPI backend, PostgreSQL database, React web app, and browser-based cashier POS.
- Physical USB HID keyboard-wedge barcode scanner connected to ThinkPad.
- Android devices access the authenticated local browser gateway over shop Wi-Fi.
- No Android APK, no PWA requirement, no CRM/customer module, and no multi-tenant SaaS in this project.

Cost goal:

- ₱0 software/API cost during development and initial local deployment.
- Use free cloud coding assistants only within their current quotas.
- Do not assume any provider's free quota is permanent or sufficient for all work.
- POS, inventory, reporting, backups, and business operation must never depend on an AI service.

---

## 1. Free AI tool strategy

Use different tools for different tasks. Do not use multiple agents to edit the same files at the same time.

| Role | Primary free tool | Backup/reviewer | Use it for |
|---|---|---|---|
| Primary implementation | Gemini CLI authenticated with a personal Google account | Gemini Code Assist extension | File-level tasks, terminal workflow, tests, refactors, documentation |
| IDE assistance | Gemini Code Assist for Individuals in VS Code | GitHub Copilot Free | Autocomplete, selected-code explanations, small functions, focused tests |
| Architecture/review | Claude Desktop Free | Gemini chat in Code Assist | Design review, prompt writing, debugging analysis, test plans, reviewing diffs |
| Backup coding help | GitHub Copilot Free | Cursor Free, if available | Small fixes if Gemini quota/availability is unavailable |
| Business AI inside ADIP | Disabled initially | Optional Gemini API Free Tier later | Owner/Admin report explanation only; never POS or write actions |

### Rules to preserve ₱0 cost

- Use a personal Google account for Gemini Code Assist / Gemini CLI free access where available.
- Do not add a paid API key, card, or auto-billing account to the application.
- Do not use Claude API, OpenAI API, paid Gemini API tier, paid OpenRouter model, or paid coding plan for this build.
- Keep cloud coding-agent tasks small to preserve quotas.
- Use Git commits as recovery points instead of repeatedly asking an AI to repair a large uncommitted change.
- Run tests locally before asking another model to review failures.
- Never upload `.env`, passwords, API keys, database dumps, real customer data, or production backups to any cloud AI.

---

## 2. Standard work loop

Use the same loop for every task.

```text
Read the milestone acceptance criteria
→ Create a Git branch
→ Ask the primary agent for a plan
→ Review planned files and assumptions
→ Ask for one focused implementation
→ Review git diff
→ Run tests and manual checks
→ Ask a reviewer only if needed
→ Commit verified work
→ Update PROJECT_STATUS.md
```

Commands:

```powershell
git checkout -b feat/<short-feature-name>
git status
git diff
git add .
git commit -m "feat: <short verified feature summary>"
```

Never proceed to the next milestone while critical tests in the current milestone fail.

---

## 3. Repository context file

Create and maintain this file before asking agents to build features:

`docs/PROJECT_STATUS.md`

```md
# ADIP Local Project Status

## Deployment target
- One bakery and sari-sari store
- Lenovo ThinkPad L380 local server and cashier station
- Physical USB HID keyboard-wedge barcode scanner
- Local browser gateway for authorized Android devices
- No APK/PWA, CRM, multi-tenant SaaS, or cloud dependency for core operations

## Current milestone
[Fill in]

## Last verified commit
[Fill in]

## Verified working features
- [Only tested features]

## Database migrations applied
- [Migration revision IDs]

## Known issues
- [Known defects or none]

## Next exact task
[One small task only]
```

Before every AI-assisted task, provide:

- The relevant part of `docs/ADIP_LOCAL_MASTER_SPEC.md`.
- The current `docs/PROJECT_STATUS.md`.
- A small project tree.
- Only the relevant source/test files.
- The actual error output if debugging.

Do not paste the whole repository unless a tool explicitly needs it.

---

## 4. Master prompt template

Use this with Gemini CLI or Gemini Code Assist for all implementation tasks.

```text
You are implementing ADIP Local for one bakery and sari-sari store.

Read these project rules first:
- docs/ADIP_LOCAL_MASTER_SPEC.md
- docs/PROJECT_STATUS.md

Current milestone:
[NAME]

Current task:
[ONE SMALL TASK]

Deployment constraints:
- Lenovo ThinkPad L380 hosts the local server and primary browser POS.
- PostgreSQL is the authoritative database.
- FastAPI is the only service allowed to access PostgreSQL.
- React + TypeScript + Vite is the web frontend.
- Android devices use authenticated browser access on shop Wi-Fi only.
- Physical USB HID keyboard-wedge scanner is used later for barcode input.
- No APK, PWA, Capacitor, CRM, multi-tenant SaaS, or direct client database access.

Non-negotiable integrity rules:
- Use UUID primary keys.
- Keep organization_id on business-owned records for this one business.
- Store money as integer centavos; never float.
- Use Alembic migrations for schema changes.
- Use transactions for POS checkout, stock changes, production, expenses, cash movements, refunds, and corrections.
- Every stock change must create an immutable inventory movement.
- Completed sales preserve historical price and cost snapshots.
- Use idempotency keys for duplicate-sensitive operations.
- Do not hard-code secrets or use real secrets in code.
- Do not modify unrelated modules.

Before implementation:
1. List exact files to create/change.
2. State assumptions and risks.
3. State acceptance criteria.
4. State tests and manual checks to run.

Then implement only this task.

After implementation:
1. List files changed.
2. List commands run.
3. Report actual results only; do not claim tests passed unless they were run.
4. List unresolved issues.
5. Do not commit changes; I will review and commit.
```

---

## 5. Milestone roadmap

## Milestone 0 — Development foundation

### Goal

Create a clean, runnable local application foundation. No business features yet.

### Build

- Git repository and `.gitignore`.
- React + TypeScript + Vite frontend.
- FastAPI + Pydantic backend.
- PostgreSQL through Docker Compose.
- SQLAlchemy 2.x and Alembic.
- `/health` endpoint.
- Frontend health/status page.
- Pytest, Vitest, Ruff, ESLint, Prettier.
- `.env.example` files with placeholders only.
- README with exact Windows setup/run/test commands.
- Initial modular-monolith directory structure.

### Primary model/tool

- Gemini CLI for scaffolding and command guidance.
- Gemini Code Assist for small editor changes.
- Claude Desktop Free to review the architecture/tree before you start.

### Primary prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 0 — Development foundation.
Current task: Create only the root project structure, Docker Compose PostgreSQL,
FastAPI GET /health, React health page, Alembic setup, test/lint configuration,
.env.example files, README, and docs/architecture.md.

Do not implement authentication, products, POS, inventory, scanner behavior,
cloud AI, reports, APK/PWA, CRM, or SaaS features.
```

### Acceptance criteria

- `docker compose up --build` starts the required local services.
- `GET /health` returns a successful response.
- Frontend shows backend health.
- Backend and frontend tests run.
- Lint and build commands run.
- No secrets are tracked by Git.
- A clean commit exists.

### Cost controls

- No cloud app deployment.
- No AI API keys in the product.
- Use free coding assistants only.

---

## Milestone 1 — Database, business identity, and access control

### Goal

Create one-business foundation with secure local users and role boundaries.

### Build

- `organizations`, `organization_settings`, `branches`.
- `users` and password hashing.
- Fixed roles: `OWNER_ADMIN`, `CASHIER`.
- Login/logout/current-user endpoints.
- Protected frontend routes.
- Permission dependencies in FastAPI.
- Audit-log foundation.
- Seed script for one local business, one branch, and first Owner/Admin.

### Primary model/tool

- Gemini CLI for models, migrations, endpoints, and tests.
- Claude Desktop Free for a security review of the auth and permission design.

### Implementation prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 1 — Database, business identity, and access control.
Current task: Implement only organizations, one branch, users, Owner/Admin and
Cashier roles, password hashing, login/logout/current-user APIs, authorization
dependencies, protected frontend routes, audit-log foundation, seed script, and
tests.

Rules:
- No public registration.
- Only Owner/Admin can create local users later.
- Cashier has least privilege.
- Do not add customer/CRM, multi-tenant SaaS, organization switching, PWA/APK,
or POS features.
```

### Claude review prompt

```text
Review the following ADIP Local authentication and authorization diff.

Check for:
- plaintext or weak password handling
- missing authorization checks
- Cashier access to Owner/Admin endpoints
- token/session leakage
- secrets in code
- unsafe error messages
- missing audit logging for sensitive changes

Do not rewrite the whole project. List only concrete risks, severity, and the
smallest safe fixes.

[paste git diff and relevant tests]
```

### Acceptance criteria

- Owner/Admin can log in.
- Cashier can log in.
- Cashier cannot access Admin routes or APIs.
- Passwords are hashed.
- Auth failures do not reveal sensitive information.
- Audit logging works for login and sensitive user actions.
- Migration can apply to an empty PostgreSQL database.

---

## Milestone 2 — Products, categories, units, photos, and barcode mappings

### Goal

Allow Owner/Admin to build the shop catalog from an empty database.

### Build

- Product categories and units of measure.
- Products with type `RESALE` or `BAKERY_PRODUCED`.
- Selling price and default cost in centavos.
- Product active/inactive state.
- Product image/attachment metadata and protected local storage.
- `product_barcodes` table.
- Multiple barcodes per product.
- Unique active barcode mapping rule.
- Product search by name/SKU/barcode.
- Owner/Admin product create/edit.
- Cashier read-only active product lookup without cost visibility.
- Optional external product lookup interface only; no required provider/API.

### Primary model/tool

- Gemini CLI for schema, migration, CRUD, and tests.
- Gemini Code Assist for product forms and validation.
- Claude Desktop Free for reviewing product/onboarding workflow.

### Implementation prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 2 — Products and barcode mappings.
Current task: Implement product categories, units, products, product images
metadata/local protected file storage, and product_barcodes.

Requirements:
- Product types are RESALE and BAKERY_PRODUCED.
- Barcode values are text and preserve leading zeroes.
- A product may have multiple barcodes.
- One active barcode maps to only one active product.
- Owner/Admin can create/edit/deactivate mappings.
- Cashier can search active products but cannot see cost or edit catalog data.
- Unknown barcodes never automatically create products.
- Product onboarding supports scan/entry → product form → price/cost/unit →
  optional photo → opening stock will be added in the next milestone.
- Create audit logs for product, price, image, and barcode changes.
- No external barcode lookup API is required; define an adapter/interface only.
```

### Acceptance criteria

- Owner/Admin can create a resale product and bakery product.
- Barcode leading zeroes survive save/read.
- Duplicate active barcode mapping is blocked.
- Cashier cannot create/edit products or barcode mappings.
- Cashier cannot see default cost.
- Product photo upload validation works.
- Product lookup by name, SKU, and barcode works.

---

## Milestone 3 — Inventory, stock receiving, bakery production, and waste

### Goal

Make all stock changes traceable and correct.

### Build

- Inventory location: one main shop location.
- Inventory balances.
- Append-only inventory movements.
- Opening stock workflow.
- Purchase receiving for resale products.
- Stock adjustments with reason and Owner/Admin authorization.
- Bakery production batches that add finished-goods inventory.
- Bakery waste/spoilage entries.
- Low-stock thresholds/report.
- Inventory movement history.
- Negative stock blocked by default.

### Primary model/tool

- Gemini CLI for transaction services and concurrency tests.
- Claude Desktop Free for a transaction/inventory integrity review.

### Implementation prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 3 — Inventory and bakery production.
Current task: Implement one inventory location, inventory balances, immutable
inventory movements, opening stock, resale stock receiving, authorized stock
adjustments, bakery production batches, bakery waste, low-stock report, and
inventory movement history.

Movement types:
OPENING_STOCK, PURCHASE_RECEIPT, PRODUCTION_IN, SALE, REFUND, WASTE,
ADJUSTMENT_IN, ADJUSTMENT_OUT.

Rules:
- Do not allow direct editing of balances.
- Every stock change is transactional and creates one immutable movement.
- Negative stock is blocked by default.
- Production batch records product, quantity, estimated total cost, unit cost,
  date, notes, actor, and audit event.
- Waste requires product, quantity, reason, date, actor, and audit event.
- Cashier cannot make stock adjustments, receive stock, record production, or
  record waste.
```

### Claude review prompt

```text
Review this inventory transaction implementation for ADIP Local.

Verify:
- balances cannot drift from movements
- failed operations roll back fully
- concurrent operations cannot create incorrect negative/duplicate stock
- direct balance edits are blocked
- production and waste are traceable
- Cashier cannot access inventory write routes

Give a ranked list of bugs and missing tests. Do not redesign unrelated files.

[paste diff, service, models, migrations, tests]
```

### Acceptance criteria

- Opening stock increases balance and creates movement.
- Receiving stock increases balance and creates movement.
- Production increases bakery finished-goods balance and creates movement.
- Waste decreases balance and creates movement.
- Unauthorized stock adjustment fails.
- Failed stock operation leaves no partial records.
- Negative stock is blocked.

---

## Milestone 4 — Cash sessions and secure POS checkout

### Goal

Process actual sales safely using the laptop browser and later the real scanner.

### Build

- Cashier open/close cash session.
- Full-screen laptop POS layout.
- Product search and cart.
- Barcode input handler compatible with USB keyboard-wedge scanner.
- Manual product lookup fallback.
- Quantity changes/removal.
- Cash payment and change calculation.
- Manual GCash/Maya/bank transfer recording only if required.
- Sale header, sale items, payments.
- Idempotency key support.
- Atomic checkout transaction.
- Historical price/cost snapshots in sale items.
- `SALE` inventory movements and balance updates.
- Cash session expected-cash updates.
- Receipt/result page.
- Audit logs.

### Primary model/tool

- Gemini CLI for focused checkout implementation and tests.
- Claude Desktop Free for a mandatory adversarial review before live pilot.

### Implementation prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 4 — Cash sessions and POS checkout.
Current task: Implement cash sessions, scanner-first POS cart, cash checkout,
sale/sale_items/payments tables, idempotency protection, receipt response, and
one atomic checkout service.

Checkout transaction must:
1. Authenticate Cashier or Owner/Admin.
2. Validate role, local organization, branch, open cash session, cart,
   active products, allowed prices/discounts, stock policy, payment amount,
   and idempotency key.
3. Create sale and sale items with price and cost snapshots.
4. Create payment records.
5. Create immutable SALE inventory movements and update balances.
6. Update cashier expected cash where applicable.
7. Write audit log.
8. Commit only when every critical step succeeds.
9. Return receipt data.

If any critical step fails, roll back all sale, payment, cash, and stock changes.

Physical scanner behavior:
- Scanner acts as USB HID keyboard and sends barcode plus Enter.
- POS barcode input must be focusable and restore focus after successful lookup.
- Add product only once per scan; use debounce.
- Unknown barcode shows a clear message and does not create a product.

Do not implement refunds/voids until this checkout flow and tests are stable.
```

### Mandatory Claude review prompt

```text
Act as a skeptical financial/POS code reviewer.

Review the ADIP Local checkout code and tests below.

Find any way the implementation could:
- duplicate a sale from double click/retry
- accept payment that does not equal sale total
- deduct stock without a completed sale
- complete a sale without deducting stock
- create partial sale/payment/cash/stock records after failure
- allow a Cashier to alter a protected price
- allow negative stock incorrectly
- lose historical price/cost snapshots
- mishandle USB scanner repeated input

Return release blockers first, then high/medium issues, exact missing tests,
and smallest safe fixes. Do not assume code is correct.

[paste relevant service/router/models/tests/git diff]
```

### Acceptance criteria

- Cashier cannot checkout without an open session.
- Cash payment change is correct.
- Double click/retry produces one sale only.
- Insufficient stock blocks checkout with no partial records.
- Simulated database failure rolls back all changes.
- Sale item keeps original price/cost after product price/cost changes later.
- Scanner input adds product once.
- Unknown barcode does not create product/sale line.
- Cashier cannot modify protected prices/costs.

---

## Milestone 5 — Expenses, cash movements, close, refunds, and corrections

### Goal

Reconcile daily cash and handle corrections without destroying history.

### Build

- Expense categories and expenses.
- Cash accounts and cash movements.
- Daily cash closing and variance.
- Controlled cash in/out.
- Refund request/approval workflow.
- Sale void workflow if required.
- Reversal records instead of destructive edits.
- Audit logs and reasons.

### Primary model/tool

- Gemini CLI for narrow finance workflows and tests.
- Claude Desktop Free for reconciliation and reversal review.

### Implementation prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 5 — Expenses, cash close, and corrections.
Current task: Implement expense categories, expenses, cash movements, cash
session close/variance, and controlled refund/void workflows.

Rules:
- Money uses centavos.
- Expense and linked cash movement must be transactional.
- Completed sales are never deleted or silently edited.
- Refunds/voids require reason, authorized role, audit log, and reversal records.
- Any stock return must create an inventory movement according to policy.
- Cashier may request a refund but Owner/Admin approves it.
- Closing shows expected cash, counted cash, and variance.
```

### Acceptance criteria

- Expense affects cash only when transaction succeeds.
- Cash session close calculates variance correctly.
- Refund/void preserves original sale and creates reversal/audit records.
- Cashier cannot approve their own protected refund.
- Historical reports reconcile after correction.

---

## Milestone 6 — Reports and owner dashboard

### Goal

Provide trustworthy, non-AI reports built from real records.

### Build

- Daily sales summary.
- Sales by payment method.
- Product/category sales.
- Low-stock report.
- Inventory movement report.
- Bakery production and waste report.
- Expense report.
- Cash session close report.
- Estimated gross-profit report based on sale-item snapshots.
- Date-range filters.
- CSV export.
- Owner/Admin dashboard.

### Primary model/tool

- Gemini CLI for report query services and API/frontend screens.
- Claude Desktop Free for verifying report definitions and edge cases.

### Implementation prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 6 — Reports and dashboard.
Current task: Implement data-backed reports only: daily sales, payment methods,
product/category sales, low stock, inventory movements, bakery production and
waste, expenses, cash closing, and estimated gross profit.

Requirements:
- Reports use persisted data only.
- Include date range filters and CSV export.
- Clearly label estimated gross profit and state any known cost-data limitations.
- Do not add fake insights, AI narratives, forecasts, arbitrary scores, or
  hard-coded dashboard values.
- Add tests where report totals are compared against known seeded transactions.
```

### Acceptance criteria

- Report totals match seeded/test transactions.
- Reports do not expose cost/profit to Cashier.
- CSV exports match filtered report data.
- Dashboard displays no fake data.

---

## Milestone 7 — Backups, restore, deployment, and local Android browser gateway

### Goal

Make the ThinkPad deployment recoverable and accessible to authorized Android browsers on shop Wi-Fi.

### Build

- Production Docker Compose or direct service deployment decision based on ThinkPad testing.
- Stable local IP/DHCP reservation or local hostname instructions.
- Health/status page.
- Application version display.
- Owner/Admin server status and backup status page.
- `pg_dump` backup script or controlled backup service.
- Backup record metadata.
- Restore runbook.
- Monthly restore test procedure.
- Startup/restart procedure.
- Responsive Android browser layouts for authorized pages.
- Clear server-unavailable behavior.
- CORS/origin configuration for local gateway.
- No direct PostgreSQL exposure to Wi-Fi clients.

### Primary model/tool

- Gemini CLI for scripts, Docker/local deployment docs, and responsive UI fixes.
- Claude Desktop Free for disaster-recovery and security checklist review.

### Implementation prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 7 — Local deployment, backups, and Android browser gateway.
Current task: Implement local ThinkPad deployment support, backup metadata and
scripts, restore documentation, status page, and authenticated Android browser
gateway over shop Wi-Fi.

Requirements:
- Do not implement PWA, service workers, APK, Capacitor, Android camera scan,
  or offline Android transactions.
- ThinkPad hosts FastAPI, PostgreSQL, frontend, and the primary cashier browser.
- Android browsers use the authenticated web API only.
- PostgreSQL must not be exposed directly to Wi-Fi clients.
- Use stable local IP/hostname guidance.
- Show clear server-unavailable status.
- Back up before migrations/releases.
- Include a restore test procedure.
```

### Acceptance criteria

- ThinkPad restart returns services to a working state.
- Android browser can connect over shop Wi-Fi with correct permissions.
- Android browser shows understandable error if server is off.
- Backup file is produced and recorded.
- Backup restores into a separate test database successfully.
- No browser client can reach PostgreSQL directly.

---

## Milestone 8 — Pilot and hardening

### Goal

Use the system safely in a limited real-business pilot before depending on it fully.

### Pilot approach

- Start with one Owner/Admin and one cashier.
- Keep paper/manual sales fallback.
- Run shadow mode if practical: record in app and compare against existing process.
- Start with a limited set of products.
- Reconcile cash, stock, and sales daily.
- Do not add new large features during pilot except bug fixes.

### Primary model/tool

- Claude Desktop Free for test checklist, incident review, and bug triage.
- Gemini CLI only for isolated, tested bug fixes.

### Prompt for bug triage

```text
We are in a live pilot for ADIP Local.

Do not add features. Diagnose and fix only this reproducible defect.

Business impact:
[describe]

Expected behavior:
[describe]

Actual behavior:
[describe]

Reproduction steps:
[numbered steps]

Relevant error/log/test output:
[paste]

Relevant files:
[paste]

First provide:
1. Severity and immediate safe workaround.
2. Root-cause hypotheses ranked by evidence.
3. Smallest safe fix.
4. Regression test.
5. Migration/backup risk if any.

Do not delete or alter existing business data. Do not make unrelated changes.
```

### Pilot exit criteria

- No unresolved checkout duplication defect.
- No unresolved stock-integrity defect.
- Cash close reconciles within understood/recorded variances.
- Scanner works on actual shop products.
- Backup and restore tested.
- Owner/Admin can operate essential screens without developer help.
- A release checklist exists.

---

## Milestone 9 — Optional cloud AI assistant

### Goal

Add one Owner/Admin-only, read-only cloud chatbot after core data is trustworthy.

### Preconditions

- At least several weeks of clean sales/stock/cash/expense/production data.
- Reports verified against real closing records.
- Permission and audit logs stable.
- No critical unresolved POS/inventory defects.
- Owner/Admin accepts cloud data-sharing notice.

### Build

- `AI_PROVIDER=disabled` default.
- Provider adapter interface.
- Optional Gemini cloud provider first.
- Strict daily request quotas.
- Read-only structured backend report tools.
- Prompt templates and JSON response schema.
- Evidence/date range/assumption/uncertainty display.
- AI request, tool-call, and feedback audit logs.
- Failure fallback to regular reports.

### Primary model/tool

- Gemini CLI for adapter scaffolding and tests.
- Claude Desktop Free for AI safety, prompt-injection, and privacy review.

### Implementation prompt

```text
Use the Master Prompt Template.

Current milestone: Milestone 9 — Optional cloud AI assistant.
Current task: Implement only the AI provider interface, disabled-by-default
configuration, one optional cloud provider adapter, Owner/Admin gating,
read-only structured report tools, strict request limits, AI audit logs, and
an evidence-backed response UI.

Rules:
- No direct SQL access for AI.
- No direct write authority for AI.
- No access to passwords, secrets, database backups, raw logs, or private files.
- Send only minimized structured report summaries.
- Every answer includes date range, evidence, assumptions, uncertainty, and
  suggested human next step.
- If cloud AI fails, local reports still work and POS is unaffected.
- Do not enable a paid API tier or automatic billing.
```

### Acceptance criteria

- AI is disabled by default.
- Cashier cannot access AI.
- AI can call only approved read-only tools.
- AI cannot mutate any business record.
- Cloud failure does not block reports or POS.
- Audit log captures sanitized tool use and response metadata.

---

## Milestone 10 — Future advanced ADIP modules

Do not begin this milestone until the pilot is stable and there is a specific business need.

Possible later work, each as separate milestones:

- Suppliers and procurement expansion.
- Purchase orders and receiving approval.
- Financial intelligence, debt, payables, receivables where actually needed.
- Forecasting with error tracking.
- Decision journal and simulations.
- Risk and opportunity modules.
- Documents/OCR and verified human-review queues.
- External intelligence only with lawful sources and citations.
- Automation and approval workflows.
- Multi-agent cloud AI workforce with Mission Control, Analyst, Critic, and Auditor.
- Organizational memory and outcome evaluation.
- Future commerce module architecture/activation only if business requires it.

For every advanced module, create a new written mini-spec, data model, API contract, permissions, audit rules, tests, and rollout plan before coding.

---

## 6. Model quota-saving tactics

### Use Gemini Code Assist for small work

- Ask about a selected function or error.
- Generate one schema/model/test.
- Explain a migration error.
- Refactor a small component.

### Use Gemini CLI for bounded repository work

- “Implement this module only.”
- “Inspect these files and make a minimal patch.”
- “Run tests and explain actual failure.”
- “Update documentation based on verified work.”

### Use Claude Desktop Free for thinking and review

- Architecture choices.
- Threat-model review.
- POS transaction adversarial review.
- Report-definition review.
- Debugging a hard failure after you supply code/logs.
- Creating test cases and release checklists.

### Avoid wasting quotas

Do not ask:

- “Build all ADIP.”
- “Fix my entire project.”
- “Read every file and make it production-ready.”
- “Implement all future AI agents now.”
- “Refactor everything.”

Instead ask:

- “Implement the `product_barcodes` migration and API only.”
- “Diagnose this failing checkout rollback test.”
- “Review this 150-line diff for duplicate-sale risks.”
- “Create tests for scanner debounce and unknown barcode behavior.”

---

## 7. Free-tier outage fallback

If Gemini is unavailable or quota-limited:

1. Stop making large code changes.
2. Run your existing tests.
3. Commit verified work.
4. Use Claude Desktop Free for planning/review or error analysis.
5. Use GitHub Copilot Free for small completions if available.
6. Continue only with small manual changes you understand.
7. Wait for the free quota reset rather than adding paid billing impulsively.

Your repository, tests, documentation, and Git history—not a specific AI provider—must be the durable source of progress.

---

## 8. Final release gate

Do not rely on the app for live store operations until all of these are verified:

- Owner/Admin and Cashier permissions work.
- Real scanner adds one known product once.
- Unknown barcode does not create a product.
- Duplicate barcode mapping is blocked.
- Sale cannot be duplicated by retry/double-click.
- Failed checkout leaves no partial sale, payment, cash, stock, or inventory movement records.
- Stock movements and balances reconcile.
- Bakery production and waste reconcile.
- Cash close shows correct expected cash, actual cash, and variance.
- Reports match test and real pilot transactions.
- Backup succeeds.
- Restore succeeds in a separate database.
- ThinkPad reboot recovery works.
- Android local browser gateway respects authentication and role permissions.
- Server outage shows an understandable message.
- No core operation depends on cloud AI or internet access.

---

## 9. Definition of the first complete release

The first complete release is not the full ADIP vision.

It is complete when the bakery and sari-sari store can safely:

1. Register products and existing manufacturer/supplier barcodes.
2. Receive resale stock in sellable units.
3. Record bakery production and waste.
4. Scan or search products at the ThinkPad cashier station.
5. Process cash sales correctly.
6. Update stock exactly once per completed sale.
7. Record expenses and close cash sessions.
8. Review accurate daily sales, stock, waste, expense, cash, and estimated-profit reports.
9. Back up and restore business data.
10. Access approved management screens from an Android browser over local Wi-Fi.

Everything else remains in the ADIP master plan and is added only after this core is reliable.
