import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";


export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jost)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      keyframes: {
        "circle-expand": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(100)" }
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "25%": { opacity: "0.75" },
          "50%": { opacity: "0.5" },
          "75%": { opacity: "0.25" },
          "100%": { opacity: "0" }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        "circle-expand": "circle-expand 2s ease-in forwards",
        "fade-out": "fade-out 1s ease-in forwards",
        slideUp: 'slideUp 0.3s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
      }
  	}
  },
  plugins: [tailwindcssAnimate],
  safelist: [
    {
      pattern: /bg-(red|blue|green|yellow|purple|pink|orange|teal|indigo|rose)-(100|200)/,
      variants: ['hover'],
    },
  ],
} satisfies Config;
