"""Application settings.

Values are read from environment variables (and an optional ``.env`` file for
local development). Never hard-code secrets here: the defaults are clearly
local-development placeholders only.
"""

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Runtime configuration for the ADIP Local backend."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    app_name: str = "ADIP Local Backend"
    app_version: str = "0.1.0"
    environment: str = "development"

    # PostgreSQL is the authoritative database. Only the backend connects to it.
    database_url: str = "postgresql+psycopg://adip:change_me_locally@localhost:5432/adip"

    backend_host: str = "0.0.0.0"
    backend_port: int = 8000

    # Comma-separated list of allowed browser origins (ThinkPad + Android gateway).
    cors_origins: str = "http://localhost:5173"

    @property
    def cors_origin_list(self) -> list[str]:
        """Return the configured CORS origins as a clean list."""
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    """Return a cached ``Settings`` instance."""
    return Settings()
