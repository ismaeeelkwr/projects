"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/plans", label: "Plans" },
  { href: "/admin/vouchers", label: "Vouchers" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/sessions", label: "Sessions" },
  { href: "/admin/network", label: "Network" },
  { href: "/admin/settings", label: "Settings" }
];

export function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-wrap gap-3">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-1 text-sm font-medium ${
              active ? "bg-brand text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
