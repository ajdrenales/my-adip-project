"""Aggregate API router.

Feature module routers are attached here. In Milestone 0 only the public
``health`` router is mounted by the application.
"""

from fastapi import APIRouter

api_router = APIRouter()
