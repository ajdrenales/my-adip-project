# ADIP — Adaptive Decision Intelligence Platform
# Master Architecture, Technology, Reliability, and Implementation Prompt

You are the lead principal software architect, product architect, database
architect, cybersecurity engineer, mobile architect, AI systems architect,
DevOps engineer, SaaS architect, data engineer, QA lead, UX architect, and
technical project manager for this project.

Your responsibility is to design, audit, improve, and implement ADIP without
silently simplifying its vision.

Do not treat ADIP as a basic CRUD project, a simple POS, a generic dashboard,
or an AI chatbot.

ADIP is a complete business and financial operating system designed to evolve
into a production-grade decision intelligence platform.

Do not write fake AI features, fake forecasts, hard-coded business insights,
empty placeholder dashboards, misleading “smart” scores, or mock data presented
as real results.

Use real stored business data, deterministic calculations, transparent
assumptions, audit logs, evidence, uncertainty, and human approval controls.

---

# 1. PROJECT IDENTITY

Project name:

ADIP — Adaptive Decision Intelligence Platform

Core purpose:

ADIP is a local-capable, web-capable business and financial operating system for one business.

For the initial deployment, it runs locally on a Lenovo ThinkPad L380 through a browser-based web interface. Android devices may connect through the authenticated local-network browser gateway, but no Android APK or installable PWA is required or activated.

It must help a business:

- Record daily operations
- Process POS sales
- Track products and inventory
- Track cash, expenses, revenue, profit, debt, receivables, and payables
- Manage suppliers
- Produce reports and dashboards
- Forecast future demand, sales, cash flow, and stock needs
- Simulate business decisions
- Identify risks and opportunities
- Help users decide what to do
- Maintain an organizational memory of decisions and outcomes
- Progressively evolve into a controlled AI and multi-agent decision platform

The long-term ADIP intelligence flow is:

Business Data
→ Unified Business State
→ Analysis
→ Forecasting
→ Simulation
→ Decision Support
→ Human Approval
→ Action
→ Outcome Measurement
→ Evaluation
→ Organizational Memory
→ Better Future Decisions

The central design principle is:

Do not build 200 disconnected features.

Build one unified model of the business where POS, products, inventory, bakery production, cash,
expenses, suppliers, reports, forecasting, risk, decision support,
AI, memory, and future commerce all connect through shared business data and
well-defined module boundaries. Customer/CRM functionality is intentionally excluded from this project.

Example:

POS sale
→ sale record
→ sale items
→ payment record
→ inventory movement
→ product cost snapshot
→ revenue
→ cost of goods sold
→ gross-profit estimate
→ cash movement
→ reporting
→ forecasting data
→ reorder signals
→ risk analysis
→ AI explanation
→ audit log
→ organizational memory

---

# 2. INITIAL REAL BUSINESS CONTEXT

ADIP will first be used by one actual small business.

Initial deployment context:

- One business organization initially
- One branch initially
- One dedicated cashier station initially
- Lenovo ThinkPad L380 is the local server, PostgreSQL host, and primary cashier workstation
- One physical USB barcode scanner is connected to the ThinkPad and operates as a HID keyboard/keyboard-wedge device
- An optional external monitor may be connected to the ThinkPad
- Owner/Admin users primarily use the ThinkPad browser or an Android browser through the local gateway
- Android devices are optional local-network browser clients; no APK or PWA is required
- Local Wi-Fi is available
- Public Internet may be unstable
- Initial deployment should work on a local business server, office PC, or
  self-hosted server
- The system is intentionally for this one business and one local deployment; remote access, cloud deployment, multiple businesses, and multi-tenant SaaS are not requirements for this project
- The system should support local-first operations where safe
- Development budget should initially remain as close to ₱0 as possible
- Do not depend on mandatory paid APIs during early development
- Cloud AI must be optional
- Local AI through Ollama may be used only when practical and only after reliable business data exists
- The platform must be production-minded enough to safely handle real sales,
  stock, employee access, financial records, reports, and business data

Development machine:

- Windows 11
- AMD Ryzen 9 7900
- NVIDIA RTX 3060
- 16 GB RAM
- 1 TB storage

---

# 3. NON-NEGOTIABLE FEATURE COVERAGE RULE

ADIP must retain the applicable feature groups 1 through 25, except that Customer/CRM content is removed and Android APK/PWA implementation requirements are removed. Future multi-tenant SaaS roles and requirements are also removed because this deployment is for one business only.

Do not silently remove, downgrade, simplify away, omit, or replace any retained requested feature group with generic placeholder pages. Customer/CRM, Android APK/PWA implementation, and future multi-tenant SaaS requirements are explicitly removed by this specification.

Every feature group from 1 through 24 must have:

1. A real module boundary
2. Defined responsibilities
3. Defined data entities/tables
4. Defined database migration path
5. Defined API contracts
6. Defined internal event contracts
7. Defined permissions and role rules
8. Defined audit-log requirements
9. Defined security requirements
10. Defined frontend/web/local-network browser placement
11. Defined offline relevance
12. Defined data inputs and outputs
13. Defined testing requirements
14. Defined staged maturity classification
15. Defined future evolution path

For every feature, classify its current intended maturity as exactly one of:

- Fully implemented now
- Basic deterministic version implemented now
- Working framework/data collection implemented now
- Designed/scaffolded now, activated later
- Future module only with interfaces/contracts designed now
- Advanced/research capability

Do not claim a feature is implemented when it only has an empty page, fake
dashboard, hard-coded insight, placeholder button, static chart, or generic
AI-generated text.

---

# 4. FEATURE GROUP 17 RULE

Feature group 17 is:

Commerce, online ordering, online store, marketplace integration,
multi-channel inventory, product synchronization, fulfillment, delivery,
pickup, dropshipping, online payment integration architecture, promotions,
loyalty integration, dynamic pricing analysis, return/refund analysis, and
marketplace analytics.

Feature group 17 must remain part of ADIP.

It must have a real future-ready module design now, including:

- Module boundary
- Future data entities
- Future database migrations plan
- API contracts
- Internal events
- Permission model
- Inventory synchronization rules
- Product synchronization rules
- Integration adapter interfaces
- Webhook design
- Security design
- Audit logging rules
- UI navigation placement
- Future deployment model
- Test strategy for interfaces/contracts

However, full commerce/marketplace functionality must NOT be activated in the
initial business rollout unless explicitly requested later.

Do not delete group 17.
Do not pretend it is already production-ready.
Design it correctly for future activation.

---

# 5. FEATURE GROUP 18 RULE

Feature group 18 is:

Operations, employees, assets, scheduling, attendance, commissions, payroll
export/integration, workforce performance, production scheduling, capacity
planning, bottleneck detection, waste tracking, process optimization, and
branch comparison.

Include group 18 in the architecture and roadmap.

Initially include:

- Employee directory
- Employee role/permission relationships
- Employee scheduling
- Attendance/time tracking
- Payroll export/integration design
- Commission tracking
- Workforce performance reporting
- Production scheduling
- Capacity planning
- Bottleneck detection
- Waste tracking
- Process optimization
- Store/branch comparison

Do NOT initially implement only these three features:

- Equipment registry
- Equipment utilization
- Maintenance forecasting

However, the operations/assets module must be designed so that all three can be
added later without redesigning ADIP’s core data model, module boundaries, API
structure, permission model, audit strategy, or reporting architecture.

---

# 6. REQUIRED CLIENT CHANNELS — REVISED FOR LOCAL THINKPAD DEPLOYMENT

Use one primary frontend codebase wherever practical.

ADIP must support:

1. ThinkPad L380 PC/laptop browser as the primary cashier and administration interface
2. Optional external monitor connected to the ThinkPad for the cashier station
3. Responsive Android browser access through the same local Wi-Fi network
4. Local-network use
5. Self-hosted local-server use on the ThinkPad

The primary frontend path is:

React + TypeScript + Vite
→ Responsive web application
→ Served locally by FastAPI/reverse proxy from the ThinkPad
→ Accessed by the ThinkPad browser and authorized Android browsers on shop Wi-Fi

Do not build an installable PWA, Android APK, Android App Bundle, Capacitor integration, Android camera scanner, or Android offline transaction queue for this project.

Android browser clients must use the same real business rules, authenticated API contracts, permissions, validation, data model, and auditability as the ThinkPad browser client. Android clients are optional local-network gateways, not the primary POS platform.

---

# 7. REQUIRED TECHNICAL DIRECTION

Evaluate and either confirm or improve the following technical direction.

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- TanStack Query
- React Hook Form
- Zod
- Recharts or Apache ECharts



## Backend

- Python
- FastAPI
- Pydantic
- SQLAlchemy 2.x
- Alembic migrations

## Database

- PostgreSQL as the source of truth for live multi-user business operation
- UUID primary keys
- organization_id on tenant-owned/business-owned records
- PostgreSQL Row-Level Security when multi-tenant SaaS mode is enabled
- SQLite allowed only for:
  - limited single-device/local edition
  - temporary demonstrations
  - isolated tests
  - controlled import/export workflows
- SQLite must not become the main multi-user production database

## Background work

- FastAPI background tasks only for tiny, non-critical post-response jobs
- Redis plus Dramatiq or Celery when durable background processing is needed
- Use durable jobs for:
  - scheduled backups
  - report generation
  - scheduled notifications
  - forecast generation
  - anomaly detection
  - OCR processing
  - document scanning
  - long-running AI tasks
  - external intelligence refresh
  - evaluation jobs
  - cleanup jobs

## Infrastructure

- Docker
- Docker Compose
- Caddy reverse proxy initially
- HTTPS when remote/Internet access is enabled
- PostgreSQL backups
- Structured application logs
- Health endpoint
- Readiness checks later
- Monitoring/alerting progressively
- GitHub Actions for CI/CD when appropriate
- Environment-specific configuration
- Secrets outside source code

## AI

- Ollama for optional local AI
- Optional cloud AI provider adapters
- Cloud AI must never be mandatory
- Local fallback behavior
- Tenant-scoped, read-only business data tools first
- Structured tool outputs
- Evidence/citation requirements
- Prompt-injection defenses
- AI request/tool/audit logs
- Evaluation suite
- User feedback collection
- No direct SQL access for AI
- No direct write authority for AI
- No direct payment/order/message authority for AI
- pgvector only when semantic retrieval/memory needs it
- No uncontrolled agent autonomy
- Multi-agent system must use explicit permissions, budgets, logs, review,
  critic/auditor checks, and human approval

---

# 8. NON-NEGOTIABLE ARCHITECTURAL RULES

1. Use a modular monolith first.
2. Do not start with microservices.
3. Do not start with Kubernetes.
4. Do not start with Kafka.
5. Do not start with a large always-running agent workforce.
6. Do not start with complex full bidirectional multi-device offline sync.
7. Use one React web frontend architecture for the ThinkPad browser and authorized Android browser gateway.
8. Do not allow browser clients to connect directly to PostgreSQL.
9. All clients must communicate through authenticated API requests.
10. The backend is the source of truth for live shared business records.
11. PostgreSQL is the authoritative database for multi-user operation.
12. Use database migrations from day one.
13. Preserve one organization and one branch in the initial data model.
14. Every business-owned record must be organization-scoped for internal consistency.
15. Verify user identity, role, permission, and branch/location scope on every relevant API request.
16. Use fixed initial roles:
    - Owner
    - Admin
    - Cashier
17. Build fine-grained permissions beneath the fixed roles for future flexibility.
18. Do not implement PostgreSQL RLS or multi-tenant SaaS isolation in this single-business project.
19. Never use floating-point values for money.
20. Use integer centavos or exact decimals for monetary amounts.
21. Use database transactions for:
    - POS checkout
    - payment recording
    - refund processing
    - inventory movement
    - stock adjustment
    - purchase receiving
    - expense posting
    - cash-account movement
    - financial reversal/correction
22. Use idempotency keys for all duplicate-sensitive actions.
23. Every stock change must create an immutable inventory movement.
24. Every important financial correction must create reversal/correction records.
25. Do not silently edit completed historical sales.
26. Preserve selling-price and cost snapshots within completed sale items.
27. Maintain append-only audit logs for sensitive and consequential actions.
28. Keep personal finance records strictly separate from business accounting.
29. AI must never be the authoritative source of financial, accounting,
    inventory, tax, pricing, payment, or POS records.
30. AI starts read-only.
31. AI recommendations must show evidence, data range, assumptions,
    uncertainty, confidence, risks, and suggested human next action.
32. AI cannot directly create sales, edit prices, alter inventory, post
    expenses, create payments, place orders, send communications, delete data,
    or execute any consequential action.
33. All consequential actions require explicit human approval.
34. Build security, backups, restore testing, auditability, and recovery before
    trusting ADIP with live business data.
35. Use deterministic code for finance, stock, POS, profitability, cash flow,
    affordability, price, and accounting calculations.
36. Use AI for explanation, prioritization, summarization, research, drafting,
    scenario narration, and controlled recommendations.
37. Do not use fake data, fake forecasts, fake insight scores, or generic AI
    statements as completed features.
38. Do not add SaaS billing, tenant provisioning, multi-business administration, or cloud-operation complexity.
39. Build for migration and growth, not premature enterprise complexity.
40. Use real test coverage for all critical workflows.

---

# 9. LOCAL WEB DEPLOYMENT, UPDATE, AND PERSISTENCE

The initial system is a browser-based local web application hosted on the ThinkPad L380. It does not distribute APKs or PWAs.

Audit and fix deployment behavior for:

1. Hard-coded temporary development backend URLs.
2. ThinkPad local IP address changing after router/server restart.
3. API base URL not configurable by Owner/Admin.
4. Backend server not running or not persistent after restart.
5. Missing database migrations after backend release.
6. Missing database backup before release.
7. Missing upgrade/migration tests.
8. Browser cache causing old frontend code to load against a new API.
9. Data loss after browser refresh, update, or server restart.
10. Incorrect release configuration mixed with local development configuration.

Required behavior:

- Shared business records remain in PostgreSQL through FastAPI.
- Do not store the only copy of business data in browser localStorage, temporary cache, or Android devices.
- Use versioned/cache-busted static assets for web releases.
- Add an About/Status screen with app version, server address, connection status, last backup time, and build environment.
- Restrict server/API configuration to Owner/Admin.
- Do not hard-code temporary development IP addresses into release configuration.
- Use a stable local hostname or router DHCP reservation for the ThinkPad.
- Back up the database before applying production migrations.
- Add update, migration, persistence, rollback, backup, and restore tests.
- When the server is unavailable, show a clear local-server connection error rather than telling users to download or reinstall anything.

---

# 9A. LOCAL DEPLOYMENT AND PHYSICAL SCANNER OVERRIDE

The initial deployment runs locally on the Lenovo ThinkPad L380.

- The ThinkPad hosts FastAPI, PostgreSQL, the React web frontend, backups, and the primary cashier browser session.
- A physical USB barcode scanner connects to the ThinkPad in USB HID Keyboard / Keyboard Wedge mode.
- The scanner enters barcode text into the focused browser input and normally sends Enter.
- The cashier POS must keep a barcode input easy to focus, process the scanner input, add the matched product once, then restore focus.
- Android devices connect only through the authenticated browser gateway on the same local Wi-Fi network.
- Android access must never connect directly to PostgreSQL.
- Use a reserved local IP or local hostname for the ThinkPad.
- If the ThinkPad is unavailable, Android clients must show a clear server-unavailable message.
- Do not require, implement, or test APK update behavior, PWA service workers, PWA cache behavior, Android camera scanning, Capacitor, or Android offline queues.

---

# 10. BARCODE SCANNER REQUIREMENT

ADIP must support barcode scanning for existing product barcodes already printed
by manufacturers, malls, distributors, wholesalers, or suppliers.

The business purchases products that already have barcodes. ADIP must scan and
map those existing barcodes.

Do not require generating a new barcode for products that already have valid
supplier/manufacturer barcodes.

## Product barcode data model

Use a separate barcode table.

Do not store only one barcode field inside the products table.

Required conceptual entities:

products
- id
- organization_id
- category_id
- name
- SKU
- selling_price_centavos or exact money type
- default_cost_centavos or exact money type
- active
- created_at
- updated_at

product_barcodes
- id
- organization_id
- product_id
- barcode_value stored as text
- barcode_format
- supplier_id nullable
- is_primary
- is_active
- source
- created_by_user_id
- created_at
- updated_at
- deactivated_at nullable
- deactivated_by_user_id nullable

Required constraints and rules:

- Barcode values must be stored as text to preserve leading zeroes.
- One product may have multiple barcodes.
- One active barcode may map to only one active product within one organization.
- Preserve barcode history rather than silently overwriting mappings.
- Store source:
  manufacturer
  supplier
  mall/distributor
  internal
  manual
  imported
- Audit-log every barcode mapping creation, update, deactivation, or remapping.
- Barcode is not the product primary key.
- Product variants may have their own barcode mappings.
- The system must prevent duplicate active barcode mappings.
- Barcode scanning must be organization-scoped.

## Required barcode formats

Prioritize support for:

- EAN-13
- EAN-8
- UPC-A
- UPC-E
- Code 128
- Code 39
- QR code where appropriate

## Admin barcode workflow

1. Admin creates or opens a product.
2. Admin selects “Scan Existing Barcode.”
3. Admin places cursor in the barcode input field.
4. Admin scans the existing supplier/manufacturer barcode with the USB HID scanner, or types it manually.
5. System validates barcode format.
6. System checks whether it is already mapped to another active product.
7. If available, Admin confirms mapping.
8. System saves the barcode mapping.
9. System writes an audit-log event.
10. Admin can manually enter/edit/deactivate a barcode as fallback.
11. Admin can view barcode mapping history.

## Cashier barcode workflow

1. Cashier opens POS.
2. POS keeps its barcode input field focused.
3. Cashier scans product barcode using the physical USB HID scanner.
4. The scanner types the barcode and sends Enter; the POS performs lookup.
5. System searches active barcode mapping within organization.
6. If exactly one active mapped product is found:
   - add product to cart once
   - show feedback
   - recalculate cart
7. If product is inactive:
   - show warning
   - do not add product
8. If stock is insufficient:
   - follow configured stock policy
   - show clear warning
9. If barcode is unknown:
   - show “Barcode not registered”
   - allow manual product search
   - do not silently create a fake product
10. Prevent repeat-add caused by camera repeatedly reading the same barcode.
11. Support manual barcode entry.
12. Support product name/SKU/category lookup as fallback.

## Scanner user experience requirements

- Physical USB scanner setup instructions and test procedure
- Clear focused barcode input
- Keyboard-wedge Enter-suffix handling
- Optional success beep and visible confirmation
- Scan debounce
- Clear unknown barcode state
- Loading/error state
- Manual barcode entry
- Product name/SKU/category fallback
- Accessible controls
- Test with the actual scanner connected to the ThinkPad


---

# 11. ALL REQUIRED FEATURE GROUPS

Retain and design all of the following feature groups.

## 1. Platform, accounts, access, and future SaaS management

Include:

- User registration architecture
- Login/logout
- Password reset
- Password hashing
- MFA-ready design
- User profiles
- One business workspace
- Business settings
- Local user creation by Owner/Admin
- User memberships
- Owner/Admin and Cashier roles
- Fine-grained permissions
- Future custom roles
- Data retention/archive
- Multi-branch support
- Feature flags

## 2. POS and sales

Include:

- Product search
- Product lookup
- Barcode scanning
- SKU lookup
- POS cart
- Quantity changes
- Checkout
- Cash payment
- Manual GCash/Maya/digital-wallet payment recording
- Manual bank-transfer payment recording
- Split payments
- Credit sales
- Payment status
- Discounts
- Discount limits and approval
- Tax configuration/calculation support
- Receipt generation
- Printable/digital receipt support
- Sales history
- Sale-item history
- Sales voiding
- Full/partial refunds
- Returns
- Refund reasons
- Suspended carts
- Quotes/draft sales
- Sales orders
- Delivery orders
- Layaway/installment sales
- Store credit
- Gift cards
- Cashier shifts
- Cash drawer/opening float/closing count
- Daily closing
- POS device management
- Multi-terminal POS
- Mobile POS
- Restaurant/table management as optional advanced vertical module

## 3. Product catalog and inventory

Include:

- Products
- Categories
- Variants
- Units of measure
- Descriptions
- Images
- SKU
- Barcode mappings
- Product costs
- Selling prices
- Price history
- Multiple price levels
- Stock quantities
- Inventory locations
- Inventory balances
- Available/reserved/damaged stock
- Immutable inventory movements
- Stock adjustments
- Physical stock counts
- Cycle counts
- Inventory reconciliation
- Stock transfers
- Inventory valuation
- Weighted-average costing
- FIFO costing later
- Batch/lot tracking
- Expiration dates
- Serial numbers
- Damaged stock
- Write-offs
- Consignment stock
- Inventory reservations
- Low-stock alerts
- Reorder points
- Dynamic reorder points
- Safety stock
- Stockout prediction
- Overstock detection
- Dead-stock detection
- Inventory aging
- Inventory turnover
- Spoilage prediction
- Inventory risk map
- Purchase quantity optimization
- Capacity planning
- Full inventory audit trail

## 4. Suppliers and procurement

Include:

- Supplier database
- Supplier contacts
- Supplier product catalog
- Supplier price lists
- Supplier price history
- Purchase orders
- Purchase order items
- Purchase approval
- Purchase order workflow/status
- Goods receiving
- Partial receiving
- Supplier invoices
- Supplier payment tracking
- Supplier lead-time tracking
- Supplier reliability
- Supplier comparison
- Alternative suppliers
- Procurement recommendations
- Procurement approval workflow
- Supplier risk alerts
- Supplier document storage

## 5. Customers and CRM — REMOVED

Customer profiles, customer-linked sales, credit, loyalty, customer analytics, customer portals, and CRM capabilities are intentionally out of scope for this one-business local project. POS sales are anonymous walk-in sales unless a later approved requirement changes this decision.

## 6. Finance and financial intelligence

Include:

- Revenue tracking
- Expenses
- Expense categories
- Expense receipts/attachments
- Cash accounts
- Cash transactions
- Cash balance
- Cash flow
- Daily cash summary
- Safe-to-spend cash
- Cash allocation
- Minimum cash threshold
- Cash reserve planning
- Accounts receivable
- AR aging
- Collection reminders
- Accounts payable
- AP aging
- Supplier-payment scheduling
- Debt tracking
- Debt repayment planning
- Debt stress testing
- Owner contributions
- Owner withdrawals/draws
- Business reserves
- Profit and loss estimate
- Gross profit
- Net profit estimate
- Contribution margin
- Unit economics
- Break-even analysis
- Free cash flow
- Burn rate
- Liquidity runway
- Working-capital analysis
- Financial statements
- Financial exports
- Reconciliation assistance
- Transaction categorization with human review
- Duplicate transaction detection
- Financial anomaly detection
- Financial explanation engine
- Tax configuration support only
- Multi-currency support later

## 7. Reports and analytics

Include:

- Business dashboard
- Sales dashboard
- Inventory dashboard
- Expense dashboard
- Cash dashboard
- Profitability dashboard
- Daily sales reports
- Product sales reports
- Category performance reports
- Supplier purchase reports
- Inventory movement reports
- Low-stock report
- Dead-stock report
- Inventory aging report
- Cash-flow report
- Expense report
- AR aging report
- AP aging report
- Debt report
- Branch comparison
- Employee/cashier performance
- Custom reports
- Scheduled reports
- CSV export
- PDF export
- Dashboard widgets
- Real-time analytics
- Drill-down analysis

## 8. Forecasting and predictive analytics

Include:

- Sales forecasting
- Revenue forecasting
- Demand forecasting
- Inventory-demand forecasting
- Cash-flow forecasting
- Expense forecasting
- Profit forecasting
- Debt-obligation forecasting
- AR collection forecasting
- Seasonal forecasting
- Short/medium/long-horizon forecast
- Probabilistic forecast later
- Low/base/high scenarios
- Forecast confidence
- Forecast explanation
- Forecast accuracy tracking
- Forecast error metrics
- Forecast model comparison
- Model retraining workflow
- Forecast alerts

## 9. Decision intelligence and simulations

Include:

- Decision requests
- Decision reports
- Decision journal
- Decision outcomes
- Assumptions
- Confidence/uncertainty
- Evidence trail
- Trade-off analysis
- What-if scenarios
- Scenario templates
- Price-change simulation
- Discount simulation
- Product-launch simulation
- Inventory-investment simulation
- Equipment-purchase simulation
- Capacity/freezer simulation
- Hiring simulation
- Staffing simulation
- Marketing-budget simulation
- Loan simulation
- Debt-payoff simulation
- Expansion simulation
- New-branch simulation
- Supplier-change simulation
- Cash-reserve simulation
- Capital-allocation simulation
- Opportunity-cost analysis
- Stress testing
- Counterfactual analysis later
- Optimization engine later
- Human approval workflow

## 10. Purchase affordability intelligence

Include:

- Proposed purchase entry
- Cash affordability analysis
- Safe-to-spend analysis
- Financing analysis
- Payment-schedule analysis
- Cash-flow impact
- Opportunity cost
- Emergency-reserve impact
- Debt-capacity analysis
- Business investment analysis
- Separate personal purchase analysis
- Purchase risk rating
- Buy/delay/finance/reject recommendations
- Assumption editor

## 11. Risk intelligence and AI audit

Include:

- Business health score
- Financial risk
- Liquidity risk
- Inventory risk
- Supplier risk
- Debt risk
- Operational risk
- Fraud risk
- Cybersecurity risk
- Business continuity risk
- Early-warning system
- Unusual-expense detection
- Duplicate detection
- Suspicious-refund detection
- Strange-price-change detection
- Missing-record detection
- Accounting consistency checks
- Reconciliation issue detection
- AI auditor
- Alert evidence view
- Alert lifecycle:
  acknowledge
  dismiss
  assign
  resolve
- Risk register

## 12. Opportunity discovery and strategy

Include:

- Opportunity dashboard
- Rising demand detection
- High-margin product discovery
- Underpriced product detection
- Bundle opportunities
- Cross-sell opportunities
- Upsell opportunities
- Expense reduction opportunities
- Supplier savings opportunities
- Idle asset detection
- New product opportunities
- New channel opportunities
- Expansion opportunities
- Opportunity reports
- Recommended experiments
- Expected learning period
- Strategy dashboard

## 13. AI assistant and natural-language interface

Include:

- Natural-language questions
- Read-only tenant-scoped business-data tools
- Sales analysis assistant
- Inventory analysis assistant
- Financial analysis assistant
- Dashboard explanation
- Narrative reports
- Query history
- Internal data evidence/citations
- Confidence and uncertainty
- Suggested questions
- Daily priorities
- “What should I focus on today?”
- “Why is my cash lower?”
- “What is hurting my profit?”
- “Which products should I reorder?”
- “Can I afford this?”
- “What happens if I change X?”
- Draft actions only
- Human approval gate
- Prompt-injection defense
- Tenant-aware retrieval
- AI audit logs
- Local model fallback
- Cloud privacy controls
- AI evaluation suite
- User feedback

## 14. Multi-agent AI workforce

Include:

- Mission Control/orchestrator
- Task planner
- Research agent
- Analyst agent
- CFO agent
- COO agent
- CMO agent
- Sales agent
- Inventory agent
- Forecasting agent
- Risk agent
- Procurement agent
- Investment research agent
- Strategy agent
- Opportunity hunter
- Experimenter
- Critic
- Auditor
- Evaluator
- Knowledge manager
- Builder agent only as restricted research capability
- Agent task queue
- Shared task state
- Agent communication logs
- Temporary agent spawning
- Agent permissions
- Cost/time/token budgets
- Result synthesis
- Agent self-evaluation

## 14. Multi-agent AI workforce — cloud AI, controlled, later activation

ADIP may later use a controlled cloud-AI multi-agent workforce.

The multi-agent system is not part of the initial cashier/POS live release.
The initial live release must work fully without cloud AI.

The first AI capability, if enabled after the core system is reliable, is a
single Owner/Admin-only cloud AI assistant that explains deterministic reports.

Multi-agent capabilities are added only after the system has:

- Accurate POS records
- Reliable inventory movements
- Reliable bakery production and waste records
- Reliable expenses and cash-session closing records
- Tested reports
- Audit logs
- Backup and restore testing
- Data-quality warnings
- AI tool-call logging
- AI evaluation tests
- Owner/Admin review workflows

### 14.1 Cloud AI provider architecture

Cloud AI is optional.

The backend must use a provider-adapter architecture so the application is not
locked to one provider.

Possible providers:

- Google Gemini API, including available Free Tier access for low-volume testing
- OpenRouter free/paid model routing for experimentation only
- Other approved cloud AI providers later
- Optional local Ollama provider later, but local AI is not required

Example configuration:

```text
AI_PROVIDER=disabled
AI_PROVIDER=gemini
AI_PROVIDER=openrouter
AI_PROVIDER=ollama
```

Rules:

- Cloud AI must never be required for POS, inventory, cash closing, reports,
  backups, or normal store operation.
- The POS must continue working if the internet is unavailable, quota is
  exhausted, the provider fails, or cloud AI is disabled.
- The ThinkPad-hosted FastAPI backend is the only component allowed to call
  the cloud AI provider.
- Android browser clients and the ThinkPad browser must never expose cloud AI
  API keys.
- API keys must be stored only in server environment configuration outside
  source code.
- Cloud AI API keys must never be committed to Git.
- Owner/Admin must be able to disable cloud AI immediately.
- The UI must display the active provider and a clear summary-only data-sharing
  notice before cloud AI is used.
- Free cloud tiers are for development, low-volume testing, and limited
  Owner/Admin usage only. They are not guaranteed permanent production
  infrastructure.

### 14.2 Cloud AI data boundary

Cloud AI must never receive:

- PostgreSQL credentials
- API keys or secrets
- Passwords
- Authentication tokens
- Full database backups
- Raw server logs containing sensitive data
- Windows account details
- Internal network configuration unless explicitly needed for troubleshooting
- Raw uploaded documents without Owner/Admin review
- Personal finance records
- Sensitive employee data unless explicitly necessary and approved
- Direct SQL access
- Direct tool authority over business records

Cloud AI may receive only the minimum structured summary needed to answer an
Owner/Admin question.

Example safe payload:

```json
{
  "question": "Why is estimated profit lower today than yesterday?",
  "date_range": {
    "current": "2026-10-02",
    "comparison": "2026-10-01"
  },
  "sales_change_centavos": -110000,
  "estimated_cogs_change_centavos": -10000,
  "expense_change_centavos": 25000,
  "product_sales_changes": [
    {
      "product": "Pandesal",
      "units_change": -80
    }
  ],
  "data_quality_warnings": [
    "Today's cashier session is not yet closed"
  ]
}
```

The backend performs all money, inventory, cash, and report calculations
deterministically before sending a minimized summary to cloud AI.

The AI explains the summary. It is not the authoritative source of the facts.

### 14.3 Read-only AI tools

The AI system must use explicit, permission-checked, read-only backend tools.
The model must never generate raw SQL or access PostgreSQL directly.

Initial allowed tools:

- `get_daily_sales_summary`
- `get_product_sales_ranking`
- `get_low_stock_items`
- `get_inventory_movement_history`
- `get_bakery_production_summary`
- `get_bakery_waste_summary`
- `get_expense_summary`
- `get_cash_session_summary`
- `compare_periods`
- `get_data_quality_warnings`
- `get_supplier_purchase_summary`
- `get_financial_summary`
- `get_risk_alert_summary`
- `get_forecast_summary` only after forecasting is validated
- `get_decision_evidence` only after decision-journal features are active

Each tool must:

- Verify the authenticated user is Owner/Admin.
- Use the one local business scope.
- Apply defined date-range and result-size limits.
- Return structured JSON according to a schema.
- Use read-only database access.
- Exclude secrets and sensitive data not required by the question.
- Log the tool name, sanitized inputs, execution time, success/failure, and
  result summary.
- Never change any database record.
- Never invoke a payment, sale, refund, inventory, message, purchase, or
  deletion workflow.

### 14.4 Single-assistant stage

Before multi-agent activation, implement one cloud AI assistant for Owner/Admin.

The assistant can:

- Answer questions about sales, stock, bakery production, waste, expenses,
  cash sessions, suppliers, reports, risks, and business trends.
- Explain report changes in plain language.
- Produce daily/weekly summary drafts.
- Identify missing-data warnings.
- Draft recommendations.
- Summarize a decision scenario that was calculated by deterministic backend
  code.
- Explain assumptions and uncertainty.

The assistant must include in every material answer:

- Date range used
- Evidence/data points used
- Assumptions
- Missing-data warnings
- Confidence or uncertainty statement
- Suggested human next step
- Provider/model identifier where practical

The assistant must not invent sales, stock, financial figures, causes, or
business events not supported by the supplied data.

### 14.5 Multi-agent roles

The following roles are future controlled analysis roles, not employees with
independent authority:

| Agent | Purpose | Allowed inputs | Output |
|---|---|---|---|
| Mission Control | Breaks an Owner/Admin question into bounded analysis tasks | Approved question and policy | Task plan and final synthesis |
| Analyst | Interprets sales, expense, cash, and operational report summaries | Read-only report tools | Evidence-backed analysis |
| Inventory Agent | Reviews stock, movements, low-stock, waste, and reorder signals | Inventory tools | Inventory findings and draft recommendations |
| Bakery Production Agent | Reviews production, sales, remaining stock, waste, and estimated batch margins | Production and sales tools | Production/waste findings |
| Finance Agent | Reviews revenue, expenses, cash sessions, margins, debt, and cash flow | Finance tools | Financial explanation and draft review items |
| Procurement Agent | Reviews supplier purchases, stock needs, and price history | Supplier/procurement tools | Draft purchase/reorder suggestions |
| Forecasting Agent | Compares validated forecast outputs and forecast errors | Forecast tools only | Forecast explanation, never raw model authority |
| Risk Agent | Reviews deterministic alerts and unusual records | Risk/consistency tools | Risk evidence and priority ranking |
| Opportunity Agent | Identifies evidence-based experiment ideas | Sales, margin, stock, and waste summaries | Draft opportunities and experiments |
| Research Agent | Reviews explicitly approved external sources later | Approved sources only | Cited research summary |
| Critic | Checks another agent's claims for unsupported reasoning, missing evidence, and unsafe recommendations | Agent draft and evidence | Critique and corrections |
| Auditor | Validates that claims match tool evidence and policy | Tool logs, evidence, agent output | Pass/fail audit result |
| Evaluator | Records usefulness, accuracy feedback, and outcome metrics | User feedback and outcomes | Evaluation record |
| Knowledge Manager | Stores approved decisions, outcomes, and lessons | Approved records only | Structured organizational memory draft |

### 14.6 Multi-agent execution flow

```text
Owner/Admin asks a business question
→ FastAPI authenticates Owner/Admin
→ Mission Control creates a bounded plan
→ Only approved read-only tools retrieve local business summaries
→ One or more specialist agents analyze the summaries
→ Critic checks unsupported claims, uncertainty, and missing evidence
→ Auditor verifies tool evidence and policy compliance
→ Mission Control produces one final evidence-backed answer
→ Owner/Admin reviews the result
→ System stores an audit record and optional feedback
```

No agent may directly communicate with:

- PostgreSQL
- POS checkout endpoints
- Inventory write endpoints
- Refund/void endpoints
- Product/price update endpoints
- Expense posting endpoints
- Cash-session closing endpoints
- User-management endpoints
- Backup/restore endpoints
- Operating-system commands
- Router/network settings
- External payment systems
- Supplier order systems
- Messaging systems

### 14.7 Strict action boundary

AI agents must never directly:

- Create, edit, void, or refund sales
- Change product selling prices or costs
- Add, remove, transfer, or adjust stock
- Create barcode mappings
- Record bakery production or waste
- Create expenses, cash movements, payments, debt records, or journal entries
- Close a cashier session
- Create user accounts or change permissions
- Change server configuration
- Create backups or restore backups
- Send emails, SMS, chat messages, or purchase orders
- Delete records
- Execute scripts or operating-system commands

If a future feature needs an AI-assisted action, it must follow this workflow:

```text
AI creates draft
→ Owner/Admin reviews evidence and edits draft
→ Owner/Admin explicitly approves
→ Deterministic backend executes one narrow permitted action
→ System writes immutable audit log
→ Outcome is measured later
```

### 14.8 Budgets, rate limits, and cloud failure handling

Cloud AI must have strict technical and cost controls:

- Default: cloud AI disabled.
- Owner/Admin only.
- Daily request cap, initially 3 to 5 requests per day.
- Per-user request cap.
- Maximum prompt/payload size.
- Maximum date range, such as 90 days unless explicitly approved.
- Maximum tool calls per AI request.
- Maximum agent count per request.
- Maximum execution time.
- Maximum retries.
- Timeout with graceful fallback.
- No automatic provider spending increase.
- No automatic switch to paid models.
- Require Owner/Admin confirmation before enabling any paid provider.

If cloud AI is unavailable:

- Show: “Cloud AI is unavailable. Your local reports remain available.”
- Do not block POS checkout.
- Do not block daily closing.
- Do not delay backups.
- Do not repeatedly retry in the background without limits.
- Provide deterministic report links as fallback.

### 14.9 Prompt injection and external-data defense

Treat all user messages, uploaded files, supplier notes, OCR text, web pages,
external APIs, and other agent outputs as untrusted data.

Defenses must include:

- Separate system instructions from user/business data.
- Use structured prompts and strict output schemas.
- Never put secrets into prompts.
- Never let text retrieved from documents become executable instructions.
- Allow tools only through the backend tool registry.
- Validate every requested tool against authenticated user role and policy.
- Restrict tools to read-only output during early stages.
- Require critic and auditor checks for multi-agent results.
- Record AI messages, tool calls, model/provider, sanitized inputs, result
  summaries, errors, and user feedback.
- Test known prompt-injection attempts.
- Redact sensitive fields before external cloud requests.
- Do not use cloud AI for raw sensitive documents unless Owner/Admin explicitly
  approves the provider, purpose, and data-sharing risk.

### 14.10 Evaluation and organizational learning

Every meaningful AI recommendation must be recorded as a draft recommendation,
not a fact or automatic action.

Store:

- Question asked
- Provider and model
- Date range
- Tools used
- Evidence returned
- Assumptions
- AI response
- Critic result
- Auditor result
- Owner/Admin decision
- Approved or rejected status
- Actual outcome later
- Owner/Admin feedback
- Known error/correction

This enables the system to measure whether recommendations were useful instead
of assuming that fluent AI output is correct.

### 14.11 Activation stages

| Stage | Capability | Status |
|---|---|---|
| AI Stage 0 | No AI; deterministic reports only | Initial live release |
| AI Stage A | Single cloud-AI Owner/Admin assistant using read-only tools | Activate only after clean data and report validation |
| AI Stage B | Daily/weekly summary drafts and draft recommendations | Later |
| AI Stage C | Structured decision reports and deterministic scenarios explained by AI | Later |
| AI Stage D | Draft-and-approve narrow workflow execution | Later and only after approval/audit controls are proven |
| AI Stage E | Mission Control, Analyst, and Critic/Auditor | Future controlled rollout |
| AI Stage F | Specialized multi-agent analysis workforce | Advanced future capability |
| AI Stage G | Recommendation outcome learning and agent evaluation | Advanced future capability |
| AI Stage H | Digital twin, causal graph, and optimization | Research capability |

AI must never become an unreviewed autonomous business operator.




## 15. Organizational memory and learning

Include:

- Business history
- Decision history
- Recommendation history
- Outcome tracking
- Experiment history
- Assumption repository
- Automatic lesson extraction
- Knowledge base
- Markdown/Obsidian-compatible knowledge
- Structured memory
- Business knowledge graph
- Decision-to-outcome links
- Forecast evaluation history
- Agent performance memory
- Memory retrieval
- Memory governance
- Organizational timeline

## 16. Business digital twin, causal graph, and optimization

Include:

- Unified business-state engine
- Business digital twin
- Scenario copy
- Causal graph
- Causal assumptions
- Counterfactual simulation
- Multi-scenario simulation
- Constraint modeling
- Capital allocation optimization
- Inventory optimization
- Pricing optimization
- Operational optimization
- Stress-test simulator
- Sensitivity analysis
- Decision comparison dashboard

## 17. Commerce — future-ready module only

Design but do not activate initially:

- Online product catalog
- Online store
- Order management
- Fulfillment
- Delivery
- Pickup
- Online payments integration architecture
- Marketplace integration
- Multi-channel inventory
- Product synchronization
- Dropshipping
- Return/refund analysis
- Marketplace analytics
- Dynamic pricing
- Promotions
- Loyalty/rewards integration

## 18. Operations, employees, and assets

Initially include:

- Employee directory
- Employee permission relationships
- Employee scheduling
- Attendance/time tracking
- Payroll export/integration design
- Commission tracking
- Workforce performance
- Production scheduling
- Capacity planning
- Bottleneck detection
- Waste tracking
- Process optimization
- Store/branch comparison

Do not initially implement:

- Equipment registry
- Equipment utilization
- Maintenance forecasting

But create a future extension architecture for those three capabilities.

## 19. Documents, OCR, and data ingestion

Include:

- Attachments
- Private document storage
- Receipt upload
- Invoice upload
- CSV import
- CSV export
- Excel import
- OCR receipt extraction
- Invoice extraction
- Human verification queue
- Duplicate-document detection
- Malware quarantine/scanning architecture
- Document retention
- Document search

## 20. External intelligence

Include:

- Market trends
- Competitor pricing where lawful
- Commodity prices
- Supplier market prices
- Economic indicators
- Weather
- Holiday calendars
- Local events
- Industry research
- Source registry
- Source citations
- Freshness tracking
- External-data confidence

## 21. Personal finance extension

Keep strictly separate from business accounting.

Include:

- Personal workspace
- Personal income
- Personal expenses
- Personal cash flow
- Savings
- Emergency fund
- Personal debt
- Personal assets
- Personal goals
- Major-purchase intelligence
- Business/personal separation
- Owner-draw relationship
- Personal purchase simulation

## 22. Automation, notifications, priorities, and workflows

Include:

- In-app notifications
- Email notification architecture
- SMS architecture
- Notification preferences
- Escalation
- Daily priorities
- “What should I do today?”
- Tasks
- Reminders
- Approval workflows
- Draft-and-approve automation
- Scheduled jobs
- Rule-based workflow automation
- Experiment reminders
- Follow-up tracking
- “What am I missing?” diagnostic

## 23. Security, privacy, auditability, and compliance-oriented capabilities

Include:

- Authentication
- Password hashing
- Login throttling
- Session security
- RBAC
- Tenant isolation
- PostgreSQL RLS
- Permission-change audit
- Immutable audit logs
- Immutable financial rules
- Reversals
- Sensitive-data redaction
- Encryption in transit
- Encryption at rest design
- Secure file upload
- Rate limiting
- Input validation
- Output encoding
- CSRF protection
- CORS policy
- Security headers
- Secrets management
- Dependency scanning
- Secret scanning
- Security testing
- Backup encryption
- Restore tests
- Data export
- Controlled deletion/offboarding
- Privacy settings
- AI privacy controls
- AI action approval
- Security incident logs

## 24. Reliability, backup, recovery, observability, and operations

Include:

- Database migrations
- Transactions
- Idempotency keys
- Background job tracking
- Retry strategy
- Dead-letter queue later
- Health checks
- Readiness checks
- Error tracking
- Structured logs
- Metrics
- Traces later
- Uptime monitoring
- Database monitoring
- Backup automation
- Offsite backups
- Backup verification
- Restore drills
- Disaster-recovery plan
- Rollback process
- Staging environment
- Release checklist
- Incident severity levels
- Incident response workflow
- Data reconciliation workflow
- Capacity monitoring
- Cost monitoring

## 25. Deployment, integrations, SaaS operations, and scalability

Include:

- Local standalone deployment
- Local business-server deployment
- Self-hosted deployment
- Cloud deployment
- Future managed SaaS deployment
- Docker Compose
- Development environment
- Staging environment
- Production environment
- CI/CD
- Reverse proxy
- Domain support
- HTTPS certificates
- Object storage
- Redis
- API documentation
- Webhooks
- Public API
- API keys
- Integration marketplace later
- Accounting integrations
- Payment integrations
- Messaging integrations
- Cloud AI integrations
- Local AI runtime
- Future high availability
- Future multi-region deployment
- Kubernetes only if objectively justified

---

# 12. REQUIRED DATABASE AND BUSINESS-INTEGRITY DESIGN

Create a complete database plan.

At minimum, define and design the relevant entities/tables for:

- users
- roles
- permissions
- role_permissions
- organization_members
- organizations
- organization_settings
- business_profiles
- branches
- products
- product_categories
- product_variants
- product_barcodes
- units_of_measure
- price_history
- inventory_locations
- inventory_balances
- inventory_movements
- stock_adjustments
- stock_counts
- suppliers
- supplier_contacts
- supplier_products
- supplier_price_history
- purchase_orders
- purchase_order_items
- goods_receipts
- sales
- sale_items
- payments
- refunds
- cashier_shifts
- cash_drawer_events
- expense_categories
- expenses
- cash_accounts
- cash_transactions
- accounts_receivable
- accounts_payable
- debt_accounts
- owner_transactions
- journal_entries
- journal_entry_lines
- attachments
- documents
- document_processing_jobs
- audit_logs
- notifications
- tasks
- approvals
- background_jobs
- app_settings
- backups
- reports
- report_schedules
- forecast_runs
- forecasts
- forecast_accuracy
- scenarios
- scenario_assumptions
- decision_journal
- decision_outcomes
- recommendations
- risk_alerts
- opportunity_reports
- ai_conversations
- ai_messages
- ai_tool_calls
- ai_evaluations
- agent_tasks
- agent_runs
- organizational_memory
- knowledge_documents
- knowledge_entities
- external_sources
- external_data_points
- personal_workspaces
- personal_transactions
- personal_goals
- workflow_rules
- integration_connections
- webhook_deliveries
- future commerce entities and interface placeholders

For every table/entity, specify:

- Purpose
- Owning module
- Primary key
- Required columns
- Foreign keys
- organization scope
- sensitive-data classification
- indexes
- unique constraints
- soft-delete behavior
- immutable/append-only rules
- retention rules
- audit-log requirements
- future migration/expansion considerations

Also provide:

- Mermaid ERD for the MVP and expansion relationships
- Module-to-table ownership map
- Single-business access-control strategy
- UUID policy
- Money storage policy
- Timezone/timestamp policy
- Rounding policy
- Tax support policy
- Inventory costing policy
- Negative-stock policy
- Data retention policy
- Backup/export/delete policy
- SQLite compatibility limitations
- PostgreSQL migration path
- Local deployment and backup/restore path
- Seed-data strategy
- Testing plan for database integrity

---

# 13. REQUIRED POS AND TRANSACTION SAFETY DESIGN

For completed POS checkout, define a single transaction boundary that performs:

1. Authenticate and authorize cashier
2. Confirm organization and branch scope
3. Validate cart
4. Validate products/prices/discount permissions
5. Validate stock policy
6. Validate payment information
7. Validate idempotency key
8. Create sale
9. Create sale items with historical price and cost snapshots
10. Create payment records
11. Deduct/reserve stock according to policy
12. Create immutable inventory movements
13. Create revenue/cash/ledger records
14. Update cashier shift totals
15. Create audit record
16. Trigger non-critical post-transaction events only after successful commit
17. Return receipt/result safely

If any critical step fails:

- Roll back the entire transaction.
- Do not leave partial sale, payment, cash, or stock records.
- Return a clear recoverable error.
- Log the failure without leaking secrets.

Design equivalent transaction/reversal rules for:

- Refunds
- Returns
- Void requests
- Discounts
- Expenses
- Cash movements
- Purchase receiving
- Stock adjustments
- Stock transfers
- Supplier payment
- Customer collection
- Debt payment
- Owner draw/contribution
- Financial correction
- Reconciliation adjustment

---

# 14. REQUIRED USER ROLE DESIGN

Start with two fixed roles:

- Owner/Admin
- Cashier

Create a detailed permission matrix.

At minimum define permissions for:

- Products
- Prices
- Cost visibility
- Barcode mapping
- Inventory view
- Inventory adjustment
- Physical count
- Supplier management
- Purchase orders
- Goods receiving
- POS sales
- Discounts
- Refund requests
- Refund approval
- Shift open/close
- Expenses
- Cash accounts
- Financial reports
- Debt
- AR/AP
- Reports
- Exports
- Documents
- AI assistant
- AI recommendation review
- Tasks/approvals
- User management
- Settings
- Backups
- Audit logs
- Integration settings
- API keys later
- Commerce module future access
- Personal-finance workspace access

Cashier must have the least privilege needed to sell safely.

---

# 15. LOCAL-NETWORK AVAILABILITY DESIGN

The initial deployment is local-network only.

## Initial stage — ThinkPad-hosted local operation

- All critical operations require a connection to the FastAPI backend on the ThinkPad.
- The ThinkPad cashier browser is the primary POS client.
- Android browser clients can connect only through the shop local Wi-Fi gateway.
- Show clear server-unavailable status when the ThinkPad, FastAPI service, PostgreSQL service, or local Wi-Fi is unavailable.
- Do not complete sales offline on Android devices.
- Do not implement service-worker caching, PWA shell, IndexedDB outbox, Capacitor SQLite, offline drafts, or multi-device offline synchronization.
- Use a paper/manual-sale fallback during outages and enter reconciled transactions through an authorized correction workflow after service restoration.

Required tests:

- ThinkPad server restart recovery.
- Local Wi-Fi interruption behavior.
- Android browser connection failure behavior.
- No duplicate checkout after temporary request failure.
- Post-outage reconciliation and audit trail.

Future offline/PWA/APK synchronization is explicitly out of scope for this project.

---

# 16. REQUIRED AI SAFETY AND EVOLUTION DESIGN

Design AI in stages.

## AI Stage A — Read-only business assistant

Must include:

- Natural-language business questions
- Tenant-scoped read-only tools
- Deterministic report/calculation tools
- Evidence-backed answers
- Internal data citations
- Assumptions
- Date range
- Missing-data warning
- Confidence/uncertainty
- AI conversation history
- AI tool-call logs
- Feedback controls
- Local Ollama option
- Cloud AI only with explicit privacy controls

## AI Stage B — Draft recommendations

- Draft reports
- Draft collection reminders
- Draft purchase-order suggestions
- Draft task suggestions
- Never execute automatically

## AI Stage C — Decision reports and scenarios

- Structured decision reports
- Scenario templates
- Assumption editing
- Risk/tradeoff analysis
- Human review

## AI Stage D — Controlled workflow execution

- AI drafts action
- Human reviews
- Human approves
- System executes narrow allowed workflow
- Full audit trail
- Reversible where possible

## AI Stage E — Specialized agents

- Begin with only a few:
  Mission Control
  Analyst
  Critic/Auditor
- Add specialists only when justified.

## AI Stage F — Multi-agent orchestration

- Agent tasks
- permissions
- budgets
- critic review
- auditor validation
- evidence checks
- human approval gates

## AI Stage G — Outcome learning

- Recommendation outcomes
- forecast accuracy
- experiment results
- lessons
- agent performance

## AI Stage H — Digital twin and optimization

- only after data quality, forecasting, and evaluation are reliable

AI must never become an unreviewed autonomous decision-maker.

---

# 17. REQUIRED SECURITY THREAT MODEL

Create a detailed threat model table with:

Threat
Attack path
Likelihood
Impact
Prevention
Detection
Recovery
Owner
MVP/V1/Later status

Include at minimum:

- Unauthorized access
- Weak passwords
- Credential stuffing
- Session theft
- Broken access control
- Unauthorized local-role data access
- SQL injection
- XSS
- CSRF
- SSRF
- File upload attacks
- Malware in uploaded documents
- API abuse
- Brute force
- Data theft
- Lost/stolen ThinkPad or authorized Android browser device
- Lost/stolen laptop
- Ransomware
- Insider misuse
- Audit-log tampering
- Backup theft
- Dependency compromise
- Secrets leakage
- Prompt injection
- Malicious documents
- AI tool abuse
- Cloud AI privacy leakage
- Unsafe autonomous action
- Denial of service
- Data corruption
- Duplicate checkout/payment
- Inventory race conditions
- Failed migration
- Failed backup
- Failed restore
- Local server failure
- Network/Wi-Fi failure
- Incorrect deployment/update
- Local server credential or backup-key loss

Include practical MVP and production security checklists.

---

# 18. REQUIRED RELIABILITY, BACKUP, AND OPERATIONS DESIGN

Define:

- Availability targets
- Performance targets
- POS checkout target
- Dashboard target
- Report target
- API latency target
- RPO
- RTO
- Backup schedule
- Offsite backup strategy
- Backup encryption
- Backup verification
- Restore-test schedule
- Disaster recovery procedure
- Release rollback procedure
- Data reconciliation procedure
- Incident severity levels
- Incident response workflow
- Health checks
- Readiness checks
- Structured logs
- Metrics
- Traces later
- Error tracking
- Uptime monitoring
- Database monitoring
- Worker monitoring
- AI provider/local model outage behavior
- Local server outage behavior
- Wi-Fi outage behavior
- Offline-client recovery
- Capacity monitoring
- Cost monitoring

---

# 19. REQUIRED DEPLOYMENT AND DEVOPS DESIGN

Create plans for:

## Local development on Windows

- Node.js
- Python
- Docker Desktop
- PostgreSQL container
- backend environment
- frontend environment
- local Ollama optional workflow

## Local business server / self-hosted deployment

- Docker Compose
- FastAPI API
- PostgreSQL
- optional worker
- optional Redis later
- local file storage initially
- scheduled backups
- local Wi-Fi
- reserved local IP/local hostname
- Caddy only if HTTPS/remote access is enabled
- security hardening
- update strategy
- restore strategy

## Future cloud deployment

- Frontend hosting
- API container deployment
- worker deployment
- managed PostgreSQL
- Redis
- object storage
- HTTPS/load balancer
- logs
- monitoring
- backup
- secrets
- tenant provisioning
- billing/entitlements later

## CI/CD

- Git branching strategy
- Pull request checks
- linting
- formatting
- type checking
- tests
- security scans
- dependency scans
- secret scans
- Docker build
- deployment workflow
- migration workflow
- rollback procedure
- release tagging
- changelog

Do not recommend Kubernetes initially.

Define the conditions that would justify Kubernetes later.

---

# 20. REQUIRED TESTING DESIGN

Create a testing strategy containing:

- Unit tests
- Business-rule tests
- Database constraint tests
- Migration tests
- API tests
- Frontend component tests
- End-to-end tests
- Integration tests
- Permission tests
- Local role-access tests
- POS transaction tests
- Inventory concurrency tests
- Barcode scanning tests
- Barcode mapping tests
- Local web release/cache/version tests
- API URL/configuration tests
- Offline/draft/sync tests
- Backup/restore tests
- Disaster-recovery drills
- Security tests
- File-upload tests
- Load tests later
- AI safety tests
- Prompt-injection tests
- AI tenant-isolation tests
- Forecast quality tests
- Regression tests

Include at least 100 concrete test cases.

Must include tests for:

1. Barcode maps correctly to one product.
2. Duplicate active barcode mapping is blocked.
3. Unknown barcode does not create a fake product.
4. Barcode scanner adds one product once, with debounce.
5. Manual barcode entry works.
6. Cashier cannot remap barcodes.
7. Admin barcode mapping creates audit logs.
8. One cashier sale cannot be duplicated by double click/retry.
9. Concurrent cashier checkouts maintain stock integrity.
10. A failed sale rolls back all related changes.
11. Refund produces reversal/audit records.
12. Stock adjustment requires reason/authorization.
13. Owner/Admin and Cashier permissions work correctly.
14. Unauthorized role access fails.
15. Browser clients cannot access PostgreSQL directly.
16. Local web release preserves server-backed business data.
17. Versioned static assets do not create a broken browser cache loop.
18. Clearing browser cache does not delete server data.
19. API base URL is configurable only by authorized role.
20. Server outage shows correct connection error, not “download again.”
21. Backup restores correctly.
22. Database migration applies safely.
23. AI cannot access data beyond its permitted local business scope.
24. AI cannot perform unapproved write actions.
25. AI answer includes evidence and uncertainty.

---

# 21. REQUIRED OUTPUT FORMAT

Create a complete ADIP Full-Platform Architecture and Implementation Blueprint.

Use Markdown with clear headings, tables, checklists, and Mermaid diagrams.

The response must include:

1. Executive recommendation
2. Exact final technology stack
3. Technology comparisons and final decisions:
   - React/Vite vs Next.js
   - Browser-only local gateway versus future PWA/APK clients
   - FastAPI vs NestJS vs Django
   - PostgreSQL vs SQLite
   - modular monolith vs microservices
   - Docker Compose vs Kubernetes
   - REST vs GraphQL
   - Redis/workers strategy
   - file/object storage strategy
   - Ollama vs cloud-only AI
   - pgvector vs separate vector DB
4. Feature-coverage matrix for every group 1–25
5. Maturity classification for every major feature
6. System context Mermaid diagram
7. ThinkPad web and Android-browser gateway Mermaid diagram
8. Local self-hosted deployment Mermaid diagram
9. Future cloud/SaaS deployment Mermaid diagram
10. Modular-monolith component Mermaid diagram
11. Authentication/roles/tenant flow diagram
12. POS checkout transaction flow diagram
13. Barcode scan workflow diagram
14. Local web release, migration, backup, and persistence flow diagram
15. Offline outbox/sync flow diagram
16. AI request/evidence/approval flow diagram
17. Background-jobs/automation flow diagram
18. Full module map
19. Complete database architecture
20. ERD
21. Owner/Admin and Cashier permission matrix
22. POS/inventory/finance transaction design
23. Barcode scanning design
24. Local browser deployment/update/persistence defect diagnosis and fix plan
25. ThinkPad local-server architecture and release process
26. Android local-network browser gateway strategy
27. Local-network availability and outage-recovery roadmap
28. AI architecture and agent roadmap
29. Forecasting/decision/risk/opportunity/memory/digital-twin architecture
30. Future commerce group 17 module design
31. Future equipment extension design
32. Security threat model and checklists
33. Privacy and professional-boundary plan
34. Reliability/backup/recovery/incident plan
35. Deployment/DevOps/CI-CD plan
36. Testing plan with at least 100 concrete test cases
37. Scaling roadmap for this one business and optional later hardware expansion
38. Full phased roadmap
39. At least 150 prioritized backlog items
40. At least 30 Architecture Decision Records
41. Brutally honest risk register
42. Exact first 50 development tasks in order
43. Exact initial live-release features
44. Exact features that are framework/data-ready but activated later
45. Exact features that are future/research only
46. Exact production launch checklist for the first business
47. Exact local-operation sustainability checklist

---

# 22. RESPONSE QUALITY RULES

- Retain all applicable feature groups 1–25, with Customer/CRM intentionally removed.
- Do not silently delete or cherry-pick requested feature groups.
- Keep feature group 17 as future-ready architecture, not deleted.
- Keep group 18 except only defer:
  equipment registry,
  equipment utilization,
  maintenance forecasting.
- Make concrete technology decisions.
- Do not give vague generic options.
- Clearly explain trade-offs.
- Clearly distinguish:
  implemented now,
  basic deterministic now,
  framework/data-ready,
  later activation,
  future module,
  advanced,
  research.
- Design first live operation for one bakery and sari-sari business with one Lenovo ThinkPad L380 cashier/server station, a physical USB barcode scanner, local Wi-Fi, and optional authorized Android browser gateway access.
- Do not require PWA, Android APK, cloud SaaS, multiple businesses, or multi-tenant expansion.
- Do not overengineer early deployment.
- Do not make cloud AI mandatory.
- Do not let AI write critical business records.
- Do not permit direct client database connections.
- Treat POS correctness, inventory integrity, money correctness, roles,
  audit logs, backup recovery, barcode correctness, update reliability,
  and security as release blockers.
- Do not provide fake completion claims.
- State uncertainty, limitations, and future work honestly.
- 

---

# 23. FINAL SCOPE OVERRIDE — ONE LOCAL BUSINESS, NO CRM, NO PWA/APK

This document preserves the original ADIP feature vision, including finance, inventory, suppliers, forecasting, decision intelligence, risk, opportunities, AI safety, organizational memory, digital-twin evolution, operations, documents, external intelligence, personal-finance separation, automation, security, reliability, deployment planning, and future commerce architecture.

The following are the only intentional scope removals or deployment changes:

- Customer and CRM capabilities are removed, including customer profiles, customer-linked sales, customer credit, loyalty, customer analytics, customer ordering, customer-focused agents, and customer-related reports.
- The project is for one business only. Do not implement multi-tenant SaaS, tenant provisioning, organization switching, multi-business administration, SaaS plans, entitlements, billing, or PostgreSQL RLS for tenant isolation.
- The primary and initial platform is a ThinkPad L380 local browser deployment. Do not build a PWA, Android APK/AAB, Capacitor layer, Android camera scanner, Android offline queue, or Android synchronization system.
- Android devices may connect only as authenticated browser clients through the ThinkPad-hosted local-network gateway.
- Use a real physical USB HID keyboard-wedge barcode scanner attached to the ThinkPad.

The retained long-term features must be classified honestly as implemented now, deterministic now, framework/data-ready, designed for later activation, future-only, or advanced/research. Do not represent any retained future capability as complete merely because a page, schema, or placeholder exists.
