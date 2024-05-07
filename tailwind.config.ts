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
      },
      backgroundColor: {
        "primary-light": "#FFFFFF",
        "primary-dark": "#242526",
        "body-dark": "#18191a",
        "body-light": "#f3f4f6",
        "compo-dark": "#3a3b3c",
        "compo-light": "#f0f2f5",
        "hover-light": "#f2f2f2",
        "hover-dark": "#3a3b3c",
      },
      textColor: {
        "primary-dark": "#e4e6eb",
        "primary-light": "#050505",
        "subheading-light": "#d4d6da",
        "subheading-dark": "#adafb4",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
