import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A84FF",
          dark: "#111827",
          muted: "#F3F4F6"
        }
      },
      borderRadius: {
        xl: "1.5rem"
      }
    }
  }
};

export default preset;
