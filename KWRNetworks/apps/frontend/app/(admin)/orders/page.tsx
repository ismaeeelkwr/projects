const orders = [
  { reference: "PSK_ref_01", amount: "₦1,200", status: "SUCCESS" },
  { reference: "PSK_ref_02", amount: "₦4,500", status: "PENDING" }
];

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Orders</h1>
      <p className="text-sm text-slate-400">Paystack transactions with webhook verification.</p>
      <div className="mt-6 space-y-4">
        {orders.map((order) => (
          <div key={order.reference} className="rounded-2xl bg-white/5 p-4">
            <p className="font-semibold">{order.reference}</p>
            <p className="text-sm text-slate-400">{order.amount}</p>
            <p className="text-xs uppercase tracking-wide text-emerald-400">{order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
