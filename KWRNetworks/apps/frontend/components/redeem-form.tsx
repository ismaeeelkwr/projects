"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Card } from "@kwr/ui";

const schema = z.object({
  voucherCode: z.string().min(10, "Voucher must be at least 10 characters")
});

type FormValues = z.infer<typeof schema>;

export function RedeemForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/vouchers/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? "Unable to redeem");
      setResult(`Voucher active: ${data.plan?.name ?? "access granted"}`);
    } catch (err: any) {
      setResult(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Redeem voucher" description="Enter the voucher code printed on your receipt.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input placeholder="e.g. KWRA7B93MZ" {...register("voucherCode")} />
          {errors.voucherCode && <p className="mt-1 text-sm text-red-500">{errors.voucherCode.message}</p>}
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Redeem"}
        </Button>
        {result && <p className="text-sm text-slate-600">{result}</p>}
      </form>
    </Card>
  );
}
