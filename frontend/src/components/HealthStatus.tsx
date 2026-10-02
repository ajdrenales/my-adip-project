import { useCallback, useEffect, useState } from 'react'

import { fetchHealth } from '../lib/api'
import type { HealthStatus as HealthStatusData } from '../types/health'

type RequestState = 'loading' | 'success' | 'error'

function HealthStatus(): JSX.Element {
  const [state, setState] = useState<RequestState>('loading')
  const [health, setHealth] = useState<HealthStatusData | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const loadHealth = useCallback(async (): Promise<void> => {
    setState('loading')
    setErrorMessage(null)

    try {
      const result = await fetchHealth()
      setHealth(result)
      setState('success')
    } catch (error: unknown) {
      setHealth(null)
      setState('error')
      setErrorMessage(error instanceof Error ? error.message : 'Unexpected error')
    }
  }, [])

  useEffect(() => {
    void loadHealth()
  }, [loadHealth])

  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-lg font-medium">Local server status</h2>

      {state === 'loading' && <p className="mt-3 text-sm text-slate-400">Checking backend…</p>}

      {state === 'error' && (
        <div className="mt-3 text-sm">
          <p className="text-red-400">Cannot reach the local ADIP server.</p>
          {errorMessage && <p className="mt-1 text-slate-400">{errorMessage}</p>}
          <button
            type="button"
            onClick={() => void loadHealth()}
            className="mt-3 rounded border border-slate-700 px-3 py-1 text-slate-200 hover:bg-slate-800"
          >
            Retry
          </button>
        </div>
      )}

      {state === 'success' && health && (
        <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <dt className="text-slate-400">Status</dt>
          <dd data-testid="health-status">{health.status}</dd>
          <dt className="text-slate-400">Service</dt>
          <dd>{health.service}</dd>
          <dt className="text-slate-400">Version</dt>
          <dd>{health.version}</dd>
          <dt className="text-slate-400">Environment</dt>
          <dd>{health.environment}</dd>
        </dl>
      )}
    </section>
  )
}

export { HealthStatus }
