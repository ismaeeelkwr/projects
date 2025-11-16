const plans = [
  { id: 1, name: "Daily 1GB", price: "₦1200", validity: "24h" },
  { id: 2, name: "Weekend Unlimited", price: "₦4500", validity: "48h" }
];

export default function PlansPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Plans</h1>
      <p className="text-sm text-slate-400">Manage voucher pricing tiers synced with Prisma Plan records.</p>
      <div className="mt-6 space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
            <div>
              <p className="text-lg font-semibold">{plan.name}</p>
              <p className="text-sm text-slate-400">Validity: {plan.validity}</p>
            </div>
            <span className="text-xl font-bold">{plan.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
