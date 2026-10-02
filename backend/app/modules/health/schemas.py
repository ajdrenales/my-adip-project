"""Pydantic schemas for the health module."""

from pydantic import BaseModel


class HealthResponse(BaseModel):
    """Response body for ``GET /health``."""

    status: str
    service: str
    version: str
    environment: str
