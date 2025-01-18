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
          100: "#F7F6F2", // Baby Powder (lightest)
          200: "#EFEDE6", // Alabaster
          300: "#DFD6C8", // Bone
          400: "#BFBCB7", // Silver (darkest)
        },
      },
      fontFamily: {
        sans: ["var(--font-playwrite-de-grund)", "sans-serif"], // Override the default sans font
      },
    },
  },
} satisfies Config;
