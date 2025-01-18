/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          "score-bg": "#e5e7eb", // สีพื้นหลังของ Scorebar
          "score-fill": "#4ade80", // สีของแถบคะแนน (เขียว)
        },
        height: {
          scorebar: "1.5rem", // ความสูงของ Scorebar
        },
        borderRadius: {
          scorebar: "9999px", // มุมโค้งมนแบบเต็ม (rounded-full)
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
