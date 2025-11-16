import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 px-6 text-center">
      <h1 className="text-4xl font-bold text-red-500">Authentication failed</h1>
      <p className="text-lg text-slate-600">Please try again or contact KWR Networks support.</p>
      <Link className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700" href="/">
        Back to portal
      </Link>
    </main>
  );
}
