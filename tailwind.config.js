/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "game-background": "url('assets/background.png')",
        "backgroundImage": "url('assets/brighter-background.jpg')",
      },
    },
  },
  plugins: [],
};
