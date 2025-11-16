import Link from "next/link";

export function Hero() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-semibold text-brand">KWR Networks Portal</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
        Wi-Fi access for Huawei AP362 and Starlink users
      </h1>
      <p className="mt-4 text-lg text-slate-500">
        Purchase vouchers, redeem existing access, and monitor WAN health in one modern experience.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link className="rounded-xl bg-brand px-6 py-3 font-semibold text-white" href="/buy">
          Buy a voucher
        </Link>
        <Link className="rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700" href="/redeem">
          Redeem code
        </Link>
      </div>
    </div>
  );
}
