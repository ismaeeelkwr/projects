import { ReactNode } from "react";
import { cn } from "../utils/cn";

type CardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, description, children, className }: CardProps) {
  return (
    <section className={cn("rounded-2xl bg-white p-6 shadow-sm", className)}>
      {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
      {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
