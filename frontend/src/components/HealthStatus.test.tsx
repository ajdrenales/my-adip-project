import { render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { HealthStatus } from './HealthStatus'

describe('HealthStatus', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('displays the backend health status when the request succeeds', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          status: 'ok',
          service: 'ADIP Local Backend',
          version: '0.1.0',
          environment: 'development'
        })
      })
    )

    render(<HealthStatus />)

    await waitFor(() => {
      expect(screen.getByTestId('health-status')).toHaveTextContent('ok')
    })

    expect(screen.getByText('ADIP Local Backend')).toBeInTheDocument()
  })

  it('shows a server-unavailable message when the backend cannot be reached', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')))

    render(<HealthStatus />)

    await waitFor(() => {
      expect(screen.getByText('Cannot reach the local ADIP server.')).toBeInTheDocument()
    })
  })
})
