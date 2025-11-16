import { Card } from "@kwr/ui";
import Link from "next/link";

type Plan = {
  id: number;
  name: string;
  priceNGN: number;
  validitySeconds: number;
  dataLimitMB?: number | null;
};

function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  if (hours < 24) return `${hours}h access`;
  return `${Math.round(hours / 24)} day pass`;
}

export function PlanGrid({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <Card key={plan.id} title={plan.name} description={formatDuration(plan.validitySeconds)}>
          <div>
            <p className="text-3xl font-bold text-slate-900">
              ₦{new Intl.NumberFormat("en-NG").format(plan.priceNGN)}
            </p>
            {plan.dataLimitMB && <p className="text-sm text-slate-500">{plan.dataLimitMB} MB</p>}
          </div>
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2 font-semibold text-white"
            href={`/buy?planId=${plan.id}`}
          >
            Buy now
          </Link>
        </Card>
      ))}
    </div>
  );
}
