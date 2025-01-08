/** @type {import('tailwindcss').Config} */
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
        customsky : "#c3ebfa",
        customlightsky : "#edf9fd",
        custompurple : "#cfceff",
        customlightpurple : "#f1f0ff",
        customyellow : "#fae27c",
        customlightyellow : "#fefce8"
      },
    },
  },
  plugins: [],
};
