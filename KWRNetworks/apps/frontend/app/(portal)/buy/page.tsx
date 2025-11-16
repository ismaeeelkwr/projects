import { BuyForm } from "../../../components/buy-form";

const plans = [
  { id: 1, name: "Daily 1GB" },
  { id: 2, name: "Weekend Unlimited" },
  { id: 3, name: "Monthly 100GB" }
];

export default function BuyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <BuyForm plans={plans} />
    </main>
  );
}
