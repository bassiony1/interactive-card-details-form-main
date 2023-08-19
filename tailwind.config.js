/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        violet: {
          100: "hsl(270, 3%, 87%)",
          200: "hsl(279, 6%, 55%)",
          300: "hsl(278, 68%, 11%)",
        },
        error: "hsl(0, 100%, 66%)",
        gradiant: {
          from: "hsl(249, 99%, 64%)",
          to: "hsl(278, 94%, 30%)",
        },
      },
      gridTemplateRows: {
        "6-auto": "repeat(6, minmax(0, auto))",
        "5-auto": "repeat(5, minmax(0, auto))",
        "page-layout": "auto 1fr",
      },
      gridTemplateColumns: {
        "2-auto": "repeat(2, minmax(0, auto))",
        "page-layout": "1fr 1fr",
      },

      fontFamily: {
        Space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        "* , *::after , *::before": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*": {
          fontSize: "initial",
          fontFamily: "Space Grotesk",
        },
        html: {
          scrollBehavior: "smooth",
          height: "100%",
        },
        body: {
          height: "100%",
          lineHeight: 1.5,
          fontFamily: "Inter",
        },
        a: {
          textDecoration: "none",
          cursor: "pointer",
          color: "inherit",
          display: "block",
        },
        ul: {
          listStyle: "none",
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        "video,canvas,svg": {
          display: "block",
          maxWidth: "100%",
        },
        "p,h1,h2,h3,h4,h5,h6": {
          overflowWrap: "break-word",
        },
        button: {
          cursor: "pointer",
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
        },
        'input[type="text"], input[type="number"]': {
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
          padding: "1rem",
        },
        "#root": {
          height: "100%",
          position: "relative",
        },
      });

      addUtilities({
        ".bg-full": {
          backgroundSize: "100% 100%",
        },
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".flex-between": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".flex-center-col": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          "flex-direction": "column",
        },
        ".flex-between-col": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-direction": "column",
        },
        ".flex-start-col": {
          display: "flex",
          "align-items": "flex-start",
          "flex-direction": "column",
        },
        ".flex-between-start": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "flex-start",
        },
        ".arrow-hide": {
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
        },
      });
    }),
  ],
};
