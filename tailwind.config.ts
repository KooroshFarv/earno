import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        arch: "polygon(50% 0%, 100% 0, 100% 85%, 0 85%, 0 0)",
      },
    },
  },
  plugins: [
    require("tailwind-clip-path"), 
  ],
};

export default config;


