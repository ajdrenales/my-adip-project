"""Reusable SQLAlchemy declarative mixins.

These mixins encode the ADIP data model rules that must hold from day one:

- UUID primary keys for every record.
- ``organization_id`` on every business-owned record (kept for the single local
  business now, and for future multi-organization growth).
- Timezone-aware ``created_at`` / ``updated_at`` timestamps.

No business tables are defined in Milestone 0; these are capabilities only.
"""

import uuid
from datetime import datetime

from sqlalchemy import DateTime, Uuid, func
from sqlalchemy.orm import Mapped, mapped_column


class UUIDPrimaryKeyMixin:
    """Adds a UUID primary key column."""

    id: Mapped[uuid.UUID] = mapped_column(
        Uuid(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )


class TimestampMixin:
    """Adds timezone-aware creation and update timestamps."""

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )


class OrganizationScopedMixin:
    """Marks a record as belonging to an organization.

    Every business-owned record is organization-scoped for internal consistency,
    even though this deployment serves a single business.
    """

    organization_id: Mapped[uuid.UUID] = mapped_column(
        Uuid(as_uuid=True),
        nullable=False,
        index=True,
    )
