"""SQLAlchemy models.

Feature tables are intentionally not implemented in Milestone 0. The shared
mixins in ``app.models.mixins`` establish the UUID primary key strategy and the
``organization_id`` organization-scoping capability from day one, so future
business-owned records inherit a consistent foundation.
"""
