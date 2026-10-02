"""Health check endpoints."""

from typing import Annotated

from fastapi import APIRouter, Depends

from app.core.config import Settings, get_settings
from app.modules.health.schemas import HealthResponse

router = APIRouter(tags=["health"])

SettingsDep = Annotated[Settings, Depends(get_settings)]


@router.get("/health", response_model=HealthResponse)
def read_health(settings: SettingsDep) -> HealthResponse:
    """Report that the backend process is running.

    This is a lightweight liveness check so the frontend can confirm it is
    talking to the local ADIP server. It deliberately does not require a
    database connection.
    """
    return HealthResponse(
        status="ok",
        service=settings.app_name,
        version=settings.app_version,
        environment=settings.environment,
    )
