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
        menuToX: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        xToMenu: {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        fadeInSlideRight: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        sequentialAppear: {
          '0%': { opacity: '0', visibility: 'hidden' },
          '99%': { opacity: '0', visibility: 'hidden' },
          '100%': { opacity: '1', visibility: 'visible' }
        },
        sequentialFadeIn: {
          '0%': { opacity: '0', visibility: 'hidden', transform: 'translateX(-10px)' },
          '99%': { opacity: '0', visibility: 'hidden', transform: 'translateX(-10px)' },
          '100%': { opacity: '0', visibility: 'visible', transform: 'translateX(-10px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInSlide: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        "circle-expand": "circle-expand 2s ease-in forwards",
        "fade-out": "fade-out 1s ease-in forwards",
        slideUp: 'slideUp 0.3s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
        menuToX: 'menuToX 1s ease-in-out forwards',
        xToMenu: 'xToMenu 1s ease-in-out forwards',
        fadeInSlideRight: 'fadeInSlideRight 0.3s ease-out forwards',
        sequentialAppear: 'sequentialAppear 0.3s ease-out forwards',
        sequentialFadeIn: 'sequentialFadeIn 0.01s ease-out forwards, fadeInSlide 0.3s ease-out 0.01s forwards'
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
