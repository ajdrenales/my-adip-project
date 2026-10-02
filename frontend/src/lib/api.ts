import type { HealthStatus } from '../types/health'

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000'

/**
 * Fetch the backend health status.
 *
 * Throws when the local ADIP server cannot be reached or returns an error so
 * the UI can show a clear "server unavailable" message.
 */
export async function fetchHealth(): Promise<HealthStatus> {
  const response = await fetch(`${API_BASE_URL}/health`)

  if (!response.ok) {
    throw new Error(`Backend health request failed with status ${response.status}`)
  }

  return (await response.json()) as HealthStatus
}

export { API_BASE_URL }