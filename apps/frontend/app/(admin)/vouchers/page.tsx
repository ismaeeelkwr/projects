const vouchers = [
  { code: "KWRA7B93MZ", status: "ACTIVE", plan: "Daily 1GB" },
  { code: "KWRJ3LPMQQ", status: "UNREDEEMED", plan: "Weekend" }
];

export default function VouchersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Vouchers</h1>
      <p className="text-sm text-slate-400">Search, export CSV, or expire vouchers instantly.</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {vouchers.map((voucher) => (
              <tr key={voucher.code} className="border-t border-white/5">
                <td className="px-4 py-3 font-mono text-xs">{voucher.code}</td>
                <td className="px-4 py-3">{voucher.plan}</td>
                <td className="px-4 py-3">{voucher.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
