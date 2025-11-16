"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button, Card } from "@kwr/ui";

const schema = z.object({
  email: z.string().email(),
  planId: z.number(),
  quantity: z.number().min(1).max(10)
});

type FormValues = {
  email: string;
  quantity: number;
};

export function BuyForm({ plans }: { plans: Array<{ id: number; name: string }> }) {
  const params = useSearchParams();
  const defaultPlan = Number(params.get("planId") ?? plans[0]?.id ?? 1);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema.pick({ email: true, quantity: true })),
    defaultValues: { email: "", quantity: 1 }
  });
  const [planId, setPlanId] = useState(defaultPlan);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setStatus(null);
    try {
      const payload = { ...values, planId };
      const res = await fetch("/api/pay/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? "Unable to start payment");
      window.location.href = data.authorizationUrl;
    } catch (error: any) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Buy Wi-Fi access" description="Select a plan, enter email, and complete payment via Paystack.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-sm font-medium text-slate-700">
          Plan
          <select
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
            value={planId}
            onChange={(event) => setPlanId(Number(event.target.value))}
          >
            {plans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <Input type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Quantity
          <Input type="number" min={1} max={5} {...register("quantity", { valueAsNumber: true })} />
          {errors.quantity && <p className="mt-1 text-sm text-red-500">{errors.quantity.message}</p>}
        </label>
        <Button type="submit" disabled={loading}>
          {loading ? "Redirecting..." : "Continue to Paystack"}
        </Button>
        {status && <p className="text-sm text-slate-500">{status}</p>}
      </form>
    </Card>
  );
}
