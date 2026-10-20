/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B3C5D",
          dark: "#062438",
          light: "#16537E",
        },
        tosca: {
          DEFAULT: "#1FB6C1",
          light: "#E0F7FA",
          dark: "#128A93",
        },
        ice: {
          DEFAULT: "#F5FAFC",
          card: "#FFFFFF",
          subtle: "#F0F7FB",
        },
        shrimp: {
          DEFAULT: "#FF7A45",
          hover: "#E86532",
        },
        wa: {
          DEFAULT: "#25D366",
          hover: "#20BA59",
          dark: "#128C7E",
        },
        slate: {
          main: "#1E293B",
          sec: "#64748B",
        }
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(11, 60, 93, 0.08), 0 4px 6px -2px rgba(11, 60, 93, 0.04)",
        hover: "0 20px 40px -10px rgba(11, 60, 93, 0.16)",
        wa: "0 8px 24px rgba(37, 211, 102, 0.35)",
        shrimp: "0 8px 24px rgba(255, 122, 69, 0.35)",
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
