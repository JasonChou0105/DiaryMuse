import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          100: "#FFFFFF", // Input Field White (lightest)
          200: "#F5F0E6", // Background Beige
          300: "#EDE6D6", // Icon Light Beige
          400: "#E4DCCD", // Button Beige
          500: "#D6C9B7", // Button Highlight Beige
          600: "#4A4A4A", // Body Text Gray
          700: "#000000", // Header Black (darkest)
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
