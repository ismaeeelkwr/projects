const settings = [
  { label: "Paystack public", value: "pk_live_xxx" },
  { label: "Huawei controller", value: "https://192.168.3.1" },
  { label: "Portal URL", value: "https://portal.kwrnetworks.xyz" }
];

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-sm text-slate-400">Update integration credentials securely.</p>
      <div className="mt-6 space-y-3">
        {settings.map((item) => (
          <div key={item.label} className="rounded-2xl bg-white/5 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
            <p className="text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
