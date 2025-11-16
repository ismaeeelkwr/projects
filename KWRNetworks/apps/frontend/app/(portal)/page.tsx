import { Hero } from "../../components/hero";
import { PlanGrid } from "../../components/plan-grid";
import { RedeemForm } from "../../components/redeem-form";

const demoPlans = [
  { id: 1, name: "Daily 1GB", priceNGN: 1200, validitySeconds: 86400, dataLimitMB: 1024 },
  { id: 2, name: "Weekend Unlimited", priceNGN: 4500, validitySeconds: 172800 },
  { id: 3, name: "Monthly 100GB", priceNGN: 22000, validitySeconds: 2592000, dataLimitMB: 102400 }
];

export default function PortalLanding() {
  return (
    <main className="px-6 py-16">
      <Hero />
      <section className="mx-auto mt-12 max-w-6xl space-y-8">
        <PlanGrid plans={demoPlans} />
        <RedeemForm />
      </section>
    </main>
  );
}
