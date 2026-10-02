import { HealthStatus } from './components/HealthStatus'

function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-16">
        <header>
          <h1 className="text-2xl font-semibold">ADIP Local</h1>
          <p className="mt-1 text-sm text-slate-400">Milestone 0 — development foundation status</p>
        </header>
        <HealthStatus />
        <footer className="text-xs text-slate-500">
          Local server on the ThinkPad. No cloud AI, no external dependency for core operation.
        </footer>
      </div>
    </main>
  )
}

export default App
