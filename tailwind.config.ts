import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "var(--gradient-primary)",
      },
      colors: {
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        primary: { DEFAULT: "var(--primary)" },
        secondary: "var(--secondary)",
        "button-text": "var(--button-text)",
      },
    },
  },
  plugins: [],
};
export default config;
