import { backendBase } from "../../../../lib/backend";

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${backendBase}/api/vouchers/redeem`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await res.text();
  return new Response(data, { status: res.status, headers: { "Content-Type": "application/json" } });
}
