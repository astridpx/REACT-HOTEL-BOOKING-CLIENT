/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        moveUp: "moveUp 500ms ease-out forwards",
      },
      keyframes: {
        moveUp: {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
      },

      aspectRatio: {
        "3/2": "3/2",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
