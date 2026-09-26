/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F2E9",
          dark: "#EFE8DA",
          paper: "#FAF6EE",
        },
        cherry: {
          DEFAULT: "#9B1C31",
          dark: "#751426",
          light: "#BA2742",
          soft: "#F8ECEE",
        },
        ink: {
          DEFAULT: "#282020",
          muted: "#5C4E49",
          light: "#8B7B74",
        },
        beige: {
          DEFAULT: "#E9DED0",
          dark: "#DCCFBF",
          light: "#F3ECE1",
        },
        blush: {
          DEFAULT: "#E8C7C7",
          soft: "#F4E5E5",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Newsreader", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "Menlo", "Courier New", "monospace"],
      },
      boxShadow: {
        sticker: "0 8px 24px -4px rgba(40, 32, 32, 0.14), 0 3px 6px -2px rgba(40, 32, 32, 0.08)",
        "sticker-hover": "0 14px 32px -4px rgba(40, 32, 32, 0.22), 0 6px 12px -2px rgba(40, 32, 32, 0.12)",
        polaroid: "0 10px 30px -5px rgba(40, 32, 32, 0.15), 0 4px 10px -2px rgba(40, 32, 32, 0.08)",
        editorial: "0 20px 40px -15px rgba(155, 28, 49, 0.12)",
        paper: "0 1px 3px rgba(40, 32, 32, 0.06), 0 1px 2px rgba(40, 32, 32, 0.04)",
      },
    },
  },
  plugins: [],
};
