import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white/5 p-8 text-white backdrop-blur">
        <h1 className="text-2xl font-semibold">Admin login</h1>
        <p className="mt-2 text-sm text-slate-300">Use the credentials generated via scripts/create-admin.ts</p>
        <form className="mt-6 space-y-4">
          <label className="block text-sm">
            Email
            <input className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2" type="email" />
          </label>
          <label className="block text-sm">
            Password
            <input className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2" type="password" />
          </label>
          <button className="w-full rounded-lg bg-brand px-4 py-2 font-semibold text-white" type="submit">
            Sign in
          </button>
          <p className="text-xs text-slate-400">
            Authentication is handled by NextAuth credentials provider targeting the backend `/api/admin/login` endpoint.
          </p>
          <Link href="/" className="text-sm text-brand underline">
            Back to portal
          </Link>
        </form>
      </div>
    </main>
  );
}
