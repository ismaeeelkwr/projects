import type { Config } from "tailwindcss";
import shared from "@kwr/ui/tailwind.preset";

const config: Config = {
  presets: [shared],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../backend/src/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}"
  ]
};

export default config;
