import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 px-6 text-center">
      <h1 className="text-4xl font-bold text-slate-900">Payment successful 🎉</h1>
      <p className="text-lg text-slate-600">
        Your voucher details will be emailed shortly and displayed on the captive portal automatically.
      </p>
      <Link className="rounded-xl bg-brand px-6 py-3 font-semibold text-white" href="/redeem">
        Redeem now
      </Link>
    </main>
  );
}
