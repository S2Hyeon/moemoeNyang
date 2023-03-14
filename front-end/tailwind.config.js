/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lisa-500": "#FF9393",
        "lisa-400": "#FFBABA",
        "lisa-300": "#FFD3D3",
        "lisa-200": "#FFE9E9",
        "lisa-100": "#FFF1F1",
      },
    },
  },
  plugins: [],
};
