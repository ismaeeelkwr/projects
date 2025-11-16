import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Providers } from "../components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KWR Voucher Portal",
  description: "Wi-Fi access for Huawei AP362 and Starlink deployments"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-slate-50">
      <body className={`${inter.className} min-h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
