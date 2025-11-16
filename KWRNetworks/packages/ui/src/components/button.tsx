import { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: "bg-brand text-white hover:bg-blue-500 focus-visible:outline-brand",
    ghost: "bg-transparent text-brand hover:bg-brand-muted focus-visible:outline-brand"
  };
  return <button className={cn(base, variants[variant], className)} {...rest} />;
}
