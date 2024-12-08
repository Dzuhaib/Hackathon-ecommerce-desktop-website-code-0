import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: '#fbecb5',
        cream2: '#faf4f4',
        cream3: '#fff9e6',
        cream4: '#ac8f4d'
      },
    },
  },
  plugins: [],
} satisfies Config;
