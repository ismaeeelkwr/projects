const samples = [
  { time: "12:00", latency: 38, status: "UP" },
  { time: "12:05", latency: 51, status: "UP" },
  { time: "12:10", latency: 120, status: "DEGRADED" }
];

export default function NetworkPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Starlink & WAN</h1>
        <p className="text-sm text-slate-400">
          BullMQ worker pushes telemetry every 60 seconds. Outages raise alerts in the dashboard.
        </p>
      </div>
      <div className="rounded-2xl bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Latency trend</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {samples.map((sample) => (
            <div key={sample.time} className="rounded-xl bg-slate-900/40 p-4">
              <p className="text-sm text-slate-400">{sample.time}</p>
              <p className="text-2xl font-semibold">{sample.latency} ms</p>
              <p className="text-xs uppercase text-emerald-400">{sample.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
