const sessions = [
  { mac: "B8:D7:AF:21:3C:90", ip: "10.0.0.23", result: "ALLOW" },
  { mac: "A1:C9:44:11:8E:02", ip: "10.0.0.45", result: "DENY" }
];

export default function SessionsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Sessions</h1>
      <p className="text-sm text-slate-400">Captured from Huawei portal callbacks and logged via Prisma.</p>
      <div className="mt-6 space-y-3">
        {sessions.map((session) => (
          <div key={session.mac} className="rounded-2xl bg-white/5 p-4">
            <p className="font-mono text-xs">{session.mac}</p>
            <p className="text-sm text-slate-400">{session.ip}</p>
            <p className="text-xs uppercase tracking-wide text-emerald-400">{session.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
