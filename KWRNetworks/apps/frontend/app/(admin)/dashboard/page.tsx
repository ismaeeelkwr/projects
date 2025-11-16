const stats = [
  { label: "Orders today", value: "34" },
  { label: "Active sessions", value: "128" },
  { label: "Revenue", value: "₦185,000" }
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-sm text-slate-400">Realtime stats from the NestJS API via TanStack Query.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 p-6">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
